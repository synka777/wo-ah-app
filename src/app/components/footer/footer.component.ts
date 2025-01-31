import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { home, calendar, leaf } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

addIcons({
'home': home,
'calendar': calendar,
'leaf': leaf
});

@Component({
selector: 'app-footer',
templateUrl: './footer.component.html',
styleUrls: ['./footer.component.scss'],
standalone: true,
imports: [
  RouterModule,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent  implements OnInit {

  constructor() {
      addIcons({home,calendar,leaf}); }

  ngOnInit() {}

}
