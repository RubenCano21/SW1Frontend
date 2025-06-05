import {Routes} from "@angular/router";
import {GeneralComponent} from "./components/election-setting/general/general.component";
import {FechaComponent} from "./components/election-setting/fecha/fecha.component";
import {VotantesComponent} from "./components/election-setting/votantes/votantes.component";
import {ResultadosComponent} from "./components/election-setting/resultados/resultados.component";
import {EliminarComponent} from "./components/election-setting/eliminar/eliminar.component";

export const routes : Routes = [

  {
    path: 'list',
    loadComponent: () => import('../election/components/election-list/election-list.component')
      .then((m) => m.ElectionListComponent),
  },
  {
    path: 'create',
    loadComponent: () => import('../election/components/election-create/election-create.component')
      .then((m) => m.ElectionCreateComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('../election/components/election-setting/election-setting.component')
      .then((m) => m.ElectionSettingComponent),
    children: [
      { path: 'general', component: GeneralComponent},
      {path: 'fechas', component: FechaComponent},
      { path: 'votantes', component: VotantesComponent},
      { path: 'resultados', component: ResultadosComponent},
      { path: 'eliminar', component: EliminarComponent}
    ]
  }
]
