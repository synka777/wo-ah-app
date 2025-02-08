import { IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { ElemListComponent } from 'src/app/components/elem-list/elem-list.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-plants',
  templateUrl: './plants.page.html',
  styleUrls: ['./plants.page.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, IonContent, CommonModule, FormsModule, ElemListComponent ]
})
export class PlantsPage implements OnInit {
  emptyDescription: string = 'Start now and create your first plant!';

  constructor() { }

  ngOnInit() { }

}
