import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioMulPageRoutingModule } from './inicio-mul-routing.module';

import { InicioMulPage } from './inicio-mul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioMulPageRoutingModule
  ],
  declarations: [InicioMulPage]
})
export class InicioMulPageModule {}
