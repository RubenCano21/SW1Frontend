import { Routes } from '@angular/router';

export const routes: Routes = [

      {
        path: 'buttons',
        loadComponent: () => import('./buttons/buttons.component').then(m => m.ButtonsComponent),
      },
      {
        path: 'button-groups',
        loadComponent: () => import('./button-groups/button-groups.component').then(m => m.ButtonGroupsComponent),
      },
      {
        path: 'dropdowns',
        loadComponent: () => import('./dropdowns/dropdowns.component').then(m => m.DropdownsComponent),
      },

];

