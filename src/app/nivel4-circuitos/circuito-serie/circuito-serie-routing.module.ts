import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitoSeriePage } from './circuito-serie.page';

const routes: Routes = [
  {
    path: '',
    component: CircuitoSeriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircuitoSeriePageRoutingModule {}
