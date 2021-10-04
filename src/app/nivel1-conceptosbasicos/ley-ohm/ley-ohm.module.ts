import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeyOhmPageRoutingModule } from './ley-ohm-routing.module';

import { LeyOhmPage } from './ley-ohm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeyOhmPageRoutingModule
  ],
  declarations: [LeyOhmPage]
})
export class LeyOhmPageModule {}
