import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioCbPage } from './inicio-cb.page';

const routes: Routes = [
  {
    path: '',
    component: InicioCbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioCbPageRoutingModule {}
