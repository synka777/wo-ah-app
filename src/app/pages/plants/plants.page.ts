import { IonCardHeader, IonCardTitle, IonCard, IonCardContent, IonText, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-plants',
  templateUrl: './plants.page.html',
  styleUrls: ['./plants.page.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, IonContent, IonText, IonCardContent, IonCard, IonCardTitle, IonCardHeader, CommonModule, FormsModule ]
})
export class PlantsPage implements OnInit {

  constructor() { }

  ngOnInit() { }

}
