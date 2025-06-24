import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./voting.component').then(m => m.VotingComponent),
  },
  { path: 'detalle-eleccion/:id',
    loadComponent: () => import('./components/election-detail/election-detail.component').then(m => m.ElectionDetailComponent)
  }
];
