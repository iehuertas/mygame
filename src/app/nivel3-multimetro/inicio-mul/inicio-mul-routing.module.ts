import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioMulPage } from './inicio-mul.page';

const routes: Routes = [
  {
    path: '',
    component: InicioMulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioMulPageRoutingModule {}
