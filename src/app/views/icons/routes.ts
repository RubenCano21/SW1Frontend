import { Routes } from '@angular/router';

export const routes: Routes = [

      {
        path: 'coreui-icons',
        loadComponent: () => import('./coreui-icons.component').then(m => m.CoreUIIconsComponent),
      },
      {
        path: 'brands',
        loadComponent: () => import('./coreui-icons.component').then(m => m.CoreUIIconsComponent),
      },
      {
        path: 'flags',
        loadComponent: () => import('./coreui-icons.component').then(m => m.CoreUIIconsComponent),
      }
];
