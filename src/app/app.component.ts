import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
selector: 'app-root',
templateUrl: 'app.component.html',
standalone: true,
imports: [
  IonApp,
  FooterComponent,
  IonRouterOutlet,
  HeaderComponent
],
})
export class AppComponent {
  constructor() {}
}