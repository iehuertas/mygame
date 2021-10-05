import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircuitoSerieParaleloPageRoutingModule } from './circuito-serie-paralelo-routing.module';

import { CircuitoSerieParaleloPage } from './circuito-serie-paralelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircuitoSerieParaleloPageRoutingModule
  ],
  declarations: [CircuitoSerieParaleloPage]
})
export class CircuitoSerieParaleloPageModule {}
