import { IonCardHeader, IonCardTitle, IonCard, IonCardContent, IonText, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, 
    CommonModule,
    FormsModule,
    IonCardHeader,
    IonCardTitle,
    IonCard,
    IonCardContent,
    IonText,
    IonContent
  ]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() { }

}