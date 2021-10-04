import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoltajePage } from './voltaje.page';

const routes: Routes = [
  {
    path: '',
    component: VoltajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoltajePageRoutingModule {}
