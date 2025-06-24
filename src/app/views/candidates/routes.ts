import {Routes} from "@angular/router";

export const routes : Routes = [
  {
    path: 'list',
    loadComponent: () => import('../candidates/components/candidate-list/candidate-list.component').then((m) => m.CandidateListComponent),
  },
  {
    path: 'register',
    loadComponent: ()=> import('../candidates/components/candidate-register/candidate-register.component').then((m) => m.CandidateRegisterComponent)
  }
];
