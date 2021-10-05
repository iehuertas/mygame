import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioCircPage } from './inicio-circ.page';

const routes: Routes = [
  {
    path: '',
    component: InicioCircPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioCircPageRoutingModule {}
