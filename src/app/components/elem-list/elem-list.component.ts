import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { from } from 'rxjs';

import { ScheduleModalComponent } from '../modals/sched-mod/sched-mod.component';
import { LocationModalComponent } from '../modals/locat-mod/locat-mod.component';
import { PlantModalComponent } from '../modals/plant-mod/plant-mod.component';


addIcons({
  'add': add
})

@Component({
  selector: 'app-elem-list',
  templateUrl: './elem-list.component.html',
  styleUrls: ['./elem-list.component.scss'],
  imports: [CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon]
})
export class ElemListComponent  implements OnInit {
  @Input() elems: any[] = [] // Placeholder for list of WebElements to display in the list. Get the list from storage
  @Input() emptyDescription: string = ''
  @Input() icon: string = ''; // Accept icon from parent component
  @Input() elemType: string = ''; // Accept elemType from parent component

  modalComponent: any = null;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    if(this.elemType === 'plant') this.modalComponent = PlantModalComponent;
    else if (this.modalComponent === 'schedule') this.modalComponent = ScheduleModalComponent;
    else this.modalComponent = LocationModalComponent;
  }

  openModalForm() {
    const modal$ = from(this.modalController.create({
      component: this.modalComponent,
      handle: false,
      initialBreakpoint: 1, // Start at 100% of screen height
      cssClass: '../../components/modals/plant-mod/plant-mod.component.scss',
    }));
    modal$.subscribe(modal => modal.present());
  }
}