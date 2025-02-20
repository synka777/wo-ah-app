import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(IonicModule.forRoot()),
    {
      provide: Storage, // Manually provide Storage
      useFactory: async () => {
        const storage = new Storage();
        await storage.create(); // Ensures Storage is initialized before use
        return storage;
      }
    }
  ]
}).catch(err => console.error(err));