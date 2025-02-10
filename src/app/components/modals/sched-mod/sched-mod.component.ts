import { IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-sched-mod',
  standalone: true,
  templateUrl: './sched-mod.component.html',
  styleUrls: ['./sched-mod.component.scss'],
  imports: [IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonContent]
})
export class ScheduleModalComponent {
  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
