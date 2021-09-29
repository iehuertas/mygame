import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CseriePage } from './cserie.page';

const routes: Routes = [
  {
    path: '',
    component: CseriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CseriePageRoutingModule {}
