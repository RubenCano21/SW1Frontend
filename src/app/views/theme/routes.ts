import { Routes } from '@angular/router';

export const routes: Routes = [

      {
        path: 'colors',
        loadComponent: () => import('./colors.component').then(m => m.ColorsComponent),
      },
      {
        path: 'typography',
        loadComponent: () => import('./typography.component').then(m => m.TypographyComponent),
      }
];

