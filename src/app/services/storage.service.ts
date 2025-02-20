import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storageReady = new BehaviorSubject<boolean>(false);
  private _storageError = new BehaviorSubject<boolean>(false);  // Emit error status

  constructor(private _storage: Storage) {
    this.initStorage().subscribe();
  }

  // Initializes the storage.
  initStorage(): Observable<boolean> {
    return from(this._storage.create()).pipe(  // Wrap the promise to an observable
      switchMap(() => {
        // Ensure `driver` is not `null`, otherwise return a fallback
        const driver = this._storage.driver;
        if (driver) {
          console.log('Active Storage Driver:', driver);
          this._storageReady.next(true);
          this._storageError.next(false);  // Indicate no error occurred
          return of(true);
        } else {
          // If driver is null, log and return an empty observable
          console.warn('Storage driver is not available');
          this._storageReady.next(false);  // Mark storage as not ready
          this._storageError.next(true);  // Indicate failure occurred
          return of(false);
        }
      }),
      catchError((error) => {
        console.error('Error initializing storage:', error);
        this._storageReady.next(false);  // Mark storage as not ready
        this._storageError.next(true);  // Indicate failure occurred
        return of(false);  // Return an empty observable on error
      })
    );
  }

  // Returns the storage initialization status (true if successful, false if failed)
  getStorageReadyStatus(): Observable<boolean> {
    return this._storageReady.asObservable();
  }

  // Returns the error status (true if initialization failed, false if successful)
  getStorageErrorStatus(): Observable<boolean> {
    return this._storageError.asObservable();
  }

  // Waits for storage to be ready before executing any operation.
  private waitForStorage<T>(operation: () => Observable<T>): Observable<T> {
    return this._storageReady.pipe(
      switchMap((isReady) => (isReady ? operation() : this._storageReady.pipe(switchMap(() => operation()))))
    );
  }


  // Stores a key-value pair.
  set<T>(key: string, value: T): Observable<void> {
    return this.waitForStorage(() => from(this._storage.set(key, value)));
  }

  // Retrieves a value and converts it into an instance of the provided class
  get<T>(key: string, classRef: new (...args: any[]) => T): Observable<T | null> {
    return this.waitForStorage(() =>
      from(this._storage.get(key)).pipe(
        map((data) => (data ? Object.assign(Object.create(classRef.prototype), data) : null)) // Rehydrate object
      )
    );
  }


  // Removes a value by key.
  remove(key: string): Observable<void> {
    return this.waitForStorage(() => from(this._storage.remove(key)));
  }

  // Clears all storage.
  clear(): Observable<void> {
    return this.waitForStorage(() => from(this._storage.clear()));
  }


  // Checks if a key exists.
  async hasKey(key: string): Promise<boolean> {
    const keys = await this._storage.keys();
    return keys.includes(key);
  }
}
