import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoltajePageRoutingModule } from './voltaje-routing.module';

import { VoltajePage } from './voltaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoltajePageRoutingModule
  ],
  declarations: [VoltajePage]
})
export class VoltajePageModule {}
