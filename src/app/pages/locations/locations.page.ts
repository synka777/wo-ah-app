import { IonContent, IonTitle, IonToolbar, IonHeader } from '@ionic/angular/standalone';
import { ElemListComponent } from 'src/app/components/elem-list/elem-list.component';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule, ElemListComponent]
})
export class LocationsPage implements OnInit {
  emptyDescription: string = 'Optional: Add a location to your plants!';

  constructor() { }

  ngOnInit() {
  }

}
