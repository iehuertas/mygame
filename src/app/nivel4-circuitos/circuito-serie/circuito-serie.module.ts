import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircuitoSeriePageRoutingModule } from './circuito-serie-routing.module';

import { CircuitoSeriePage } from './circuito-serie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircuitoSeriePageRoutingModule
  ],
  declarations: [CircuitoSeriePage]
})
export class CircuitoSeriePageModule {}
