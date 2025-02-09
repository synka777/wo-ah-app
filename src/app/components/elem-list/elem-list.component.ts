import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { add } from 'ionicons/icons';
import { addIcons } from 'ionicons';


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

  constructor() { }

  ngOnInit() {}

  openModalForm() {
    // Open a modal to add a new elem
  }
}
