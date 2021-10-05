import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioCondPage } from './inicio-cond.page';

const routes: Routes = [
  {
    path: '',
    component: InicioCondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioCondPageRoutingModule {}
