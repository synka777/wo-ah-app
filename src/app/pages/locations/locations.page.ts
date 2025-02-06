import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonContent, IonTitle, IonToolbar, IonHeader } from '@ionic/angular/standalone';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-places',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonCardContent, IonCardTitle, IonCardHeader, IonCard, CommonModule, FormsModule ]
})
export class LocationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
