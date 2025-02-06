import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonTitle, IonToolbar, IonHeader, IonContent, IonText, IonCardContent, IonCardTitle, IonCardHeader, IonCard, CommonModule, FormsModule ]
})
export class SchedulePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
