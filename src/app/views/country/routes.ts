import {Routes} from "@angular/router";


export const routes : Routes = [
  {
    path: 'list',
    loadComponent: () => import('../country/components/country-list/country-list.component').then((m) => m.CountryListComponent),
  },
  {
    path: 'regions',
    loadComponent: () => import('../country/components/region-list/region-list.component').then((m) => m.RegionListComponent),
  }
]
