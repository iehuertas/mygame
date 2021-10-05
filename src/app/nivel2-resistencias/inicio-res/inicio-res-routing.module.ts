import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioResPage } from './inicio-res.page';

const routes: Routes = [
  {
    path: '',
    component: InicioResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioResPageRoutingModule {}
