import { Routes } from '@angular/router';

export const routes: Routes = [

      {
        path: 'alerts',
        loadComponent: () => import('./alerts/alerts.component').then(m => m.AlertsComponent),
      },
      {
        path: 'badges',
        loadComponent: () => import('./badges/badges.component').then(m => m.BadgesComponent),
      },
      {
        path: 'modal',
        loadComponent: () => import('./modals/modals.component').then(m => m.ModalsComponent),
      },
      {
        path: 'toasts',
        loadComponent: () => import('./toasters/toasters.component').then(m => m.ToastersComponent),
      }
];
