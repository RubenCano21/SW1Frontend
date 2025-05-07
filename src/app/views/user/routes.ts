import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'list-user',
    loadComponent: () => import('./list-user/list-user.component').then(m => m.ListUserComponent),
  },

];
