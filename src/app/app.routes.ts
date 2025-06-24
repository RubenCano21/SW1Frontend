import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,

    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'user',
        loadChildren: () => import('./views/user/routes').then((m) => m.routes)
      },
      {
        path: 'election',
        loadChildren: () => import('./views/election/routes').then((m) => m.routes)
      },
      {
        path: 'voter',
        loadChildren: () => import('./views/voter/routes').then((m) => m.routes)
      },
      {
        path: 'countries',
        loadChildren: () => import('./views/country/routes').then((m) => m.routes)
      },
      {
        path: 'candidates',
        loadChildren: () => import('./views/candidates/routes').then((m) => m.routes)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },

  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'my-elections',
    loadComponent: () => import('./views/election/components/my-elections/my-elections.component')
      .then(m => m.MyElectionsComponent)
  },
  {
    path: 'election/create',
    loadComponent: () => import('./views/election/components/election-create/election-create.component')
      .then((m) => m.ElectionCreateComponent),
  },
  { path: '**', redirectTo: 'dashboard' }
];
