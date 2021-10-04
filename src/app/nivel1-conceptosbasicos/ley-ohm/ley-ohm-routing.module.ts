import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeyOhmPage } from './ley-ohm.page';

const routes: Routes = [
  {
    path: '',
    component: LeyOhmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeyOhmPageRoutingModule {}
