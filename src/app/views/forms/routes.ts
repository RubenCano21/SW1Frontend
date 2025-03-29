import { Routes } from '@angular/router';

export const routes: Routes = [

      {
        path: 'form-control',
        loadComponent: () => import('./form-controls/form-controls.component').then(m => m.FormControlsComponent),
      },
      {
        path: 'select',
        loadComponent: () => import('./select/select.component').then(m => m.SelectComponent),
      },
      {
        path: 'checks-radios',
        loadComponent: () => import('./checks-radios/checks-radios.component').then(m => m.ChecksRadiosComponent),
      },
      {
        path: 'range',
        loadComponent: () => import('./ranges/ranges.component').then(m => m.RangesComponent),
      },
      {
        path: 'input-group',
        loadComponent: () => import('./input-groups/input-groups.component').then(m => m.InputGroupsComponent),
      },
      {
        path: 'floating-labels',
        loadComponent: () => import('./floating-labels/floating-labels.component').then(m => m.FloatingLabelsComponent),
      },
      {
        path: 'layout',
        loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
      },
      {
        path: 'validation',
        loadComponent: () => import('./validation/validation.component').then(m => m.ValidationComponent),
      }
];
