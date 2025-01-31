import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'schedule',
    loadComponent: () => import('./pages/schedule/schedule.page').then( m => m.SchedulePage)
  },

  {
    path: 'add',
    loadComponent: () => import('./pages/add/add.page').then( m => m.AddPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];