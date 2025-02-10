import { IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-plant-mod',
  standalone: true,
  templateUrl: './plant-mod.component.html',
  styleUrls: ['./plant-mod.component.scss'],
  imports: [IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent]
})
export class PlantModalComponent {
  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
