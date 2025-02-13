import { IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonList, IonInput, IonLabel, IonDatetime, IonTextarea } from "@ionic/angular/standalone";
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { delay, of } from "rxjs";

import { Plant } from '../../../classes/plant.model';


@Component({
  selector: 'app-plant-mod',
  standalone: true,
  templateUrl: './plant-mod.component.html',
  styleUrls: ['./plant-mod.component.scss'],
  imports: [CommonModule, FormsModule, IonTextarea, IonDatetime, IonLabel, IonInput, IonList, IonItem, IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent]
})
export class PlantModalComponent implements OnInit {
  @Input() plant!: Plant;
  isReady: boolean = false;

  constructor(private modalController: ModalController) {
    // Perform constructor instructions here
    // ...

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

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    // Save the plant data
    this.modalController.dismiss(this.plant);
  }
}