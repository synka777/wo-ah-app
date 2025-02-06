import { Routes } from '@angular/router';

import { LocationsPage } from './pages/locations/locations.page';
import { SchedulePage } from './pages/schedule/schedule.page';
import { PlantsPage } from './pages/plants/plants.page';
import { HomePage } from './pages/home/home.page';


export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'schedule', component: SchedulePage },
  { path: 'plants', component: PlantsPage },
  { path: 'locations', component: LocationsPage },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];