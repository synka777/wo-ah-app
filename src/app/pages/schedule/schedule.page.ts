import { IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { ElemListComponent } from 'src/app/components/elem-list/elem-list.component';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { calendarOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonTitle, IonToolbar, IonHeader, IonContent, CommonModule, FormsModule, ElemListComponent]
})
export class SchedulePage implements OnInit {
  emptyDescription: string = 'Please create a schedule to get started!';
  elemType: string = 'schedule';
  icon: any = calendarOutline;

  constructor() { }

  ngOnInit() {
  }

}
