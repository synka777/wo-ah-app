import { IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-locat-mod',
  standalone: true,
  templateUrl: './locat-mod.component.html',
  styleUrls: ['./locat-mod.component.scss'],
  imports: [IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent]
})
export class LocationModalComponent {
  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
