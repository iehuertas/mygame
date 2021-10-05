import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitoParaleloPage } from './circuito-paralelo.page';

const routes: Routes = [
  {
    path: '',
    component: CircuitoParaleloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircuitoParaleloPageRoutingModule {}
