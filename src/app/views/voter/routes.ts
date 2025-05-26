import {Routes} from "@angular/router";


export const routes : Routes = [
  {
    path: '',
    loadComponent: () => import('../voter/components/voter-list/voter-list.component').then((m) => m.VoterListComponent),
  },
  {
    path: 'create',
    loadComponent: () => import('../voter/components/voter-form/voter-form.component').then((m) => m.VoterFormComponent),
  }
];
