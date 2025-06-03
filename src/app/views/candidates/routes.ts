import {Routes} from "@angular/router";

export const routes : Routes = [
  {
    path: 'list',
    loadComponent: () => import('../candidates/components/candidate-list/candidate-list.component').then((m) => m.CandidateListComponent),
  },
];
