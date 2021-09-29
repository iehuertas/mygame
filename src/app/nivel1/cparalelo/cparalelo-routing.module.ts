import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CparaleloPage } from './cparalelo.page';

const routes: Routes = [
  {
    path: '',
    component: CparaleloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CparaleloPageRoutingModule {}
