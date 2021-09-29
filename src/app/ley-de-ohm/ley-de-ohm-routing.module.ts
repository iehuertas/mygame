import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeyDeOhmPage } from './ley-de-ohm.page';

const routes: Routes = [
  {
    path: '',
    component: LeyDeOhmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeyDeOhmPageRoutingModule {}
