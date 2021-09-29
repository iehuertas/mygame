import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeyDeOhmPageRoutingModule } from './ley-de-ohm-routing.module';

import { LeyDeOhmPage } from './ley-de-ohm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeyDeOhmPageRoutingModule
  ],
  declarations: [LeyDeOhmPage]
})
export class LeyDeOhmPageModule {}
