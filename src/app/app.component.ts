import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { home, calendar, leaf, location } from 'ionicons/icons';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';


addIcons({
  'home': home,
  'calendar': calendar,
  'leaf': leaf,
  'location': location
});


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader,
    CommonModule,
    RouterModule,
    IonApp,
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeRoute: string = '';
  // showTabs: boolean = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
      addIcons({home,leaf,calendar,location});
      // this.router.events.subscribe((event) => {
      //   if (event instanceof NavigationStart) {
      //     // Hide the tabs before route change if necessary
      //     this.showTabs = !this.isHomeRoute(event.url);
      //   }
      // });
    }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.showTabs = true;
    //   console.log("Tabs should be visible:", this.showTabs);
    //   this.cdr.detectChanges();
    // }, 100); // Give it a tiny delay
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

  // private isHomeRoute(url: string): boolean {
  //   return url.includes('/home'); // Add logic to match your home route
  // }
}