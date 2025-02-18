import { IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonList } from "@ionic/angular/standalone";
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import flatpickr from "flatpickr";
import { delay, of } from "rxjs";

import { Plant } from '../../../classes/plant.model';


@Component({
  selector: 'app-plant-mod',
  standalone: true,
  templateUrl: './plant-mod.component.html',
  styleUrls: ['./plant-mod.component.scss'],
  imports: [CommonModule, FormsModule, IonList, IonItem, IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent]
})
export class PlantModalComponent implements OnInit, AfterViewInit {
  @Input() plant!: Plant;
  isReady: boolean = false;

  @ViewChild('lastWateredInput', { static: false }) lastWateredInput!: ElementRef;
  @ViewChild('lastFertilizedInput', { static: false }) lastFertilizedInput!: ElementRef;

  constructor(private modalController: ModalController) {

    // Simulate async operation
    of(new Plant('', '', '', new Date(), new Date(), '', ''))
      .pipe(delay(100)) // Simulate a delay
      .subscribe(plant => {
        this.plant = plant;
        this.isReady = true;
      });
  }

  ngOnInit() {
    // Additional initialization if needed
  }

  ngAfterViewInit() {
    of(null).pipe(delay(100)).subscribe(() => {
      if (this.lastWateredInput) {
        flatpickr(this.lastWateredInput.nativeElement, {
          defaultDate: this.plant.lastWatered,
          onChange: (selectedDates) => {
            this.plant.lastWatered = selectedDates[0];
          }
        });
      }

      if (this.lastFertilizedInput) {
        flatpickr(this.lastFertilizedInput.nativeElement, {
          defaultDate: this.plant.lastFertilized,
          onChange: (selectedDates) => {
            this.plant.lastFertilized = selectedDates[0];
          }
        });
      }
    });
  }

  onFocus(event: FocusEvent) {
    const parent = (event.target as HTMLInputElement).parentElement;
    parent?.classList.add('has-value');
  }

  onBlur(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      const parent = input.parentElement;
      parent?.classList.remove('has-value');
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    // Save the plant data
    this.modalController.dismiss(this.plant);
  }
}