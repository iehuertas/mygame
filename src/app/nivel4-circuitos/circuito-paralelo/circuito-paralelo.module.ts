import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircuitoParaleloPageRoutingModule } from './circuito-paralelo-routing.module';

import { CircuitoParaleloPage } from './circuito-paralelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircuitoParaleloPageRoutingModule
  ],
  declarations: [CircuitoParaleloPage]
})
export class CircuitoParaleloPageModule {}
