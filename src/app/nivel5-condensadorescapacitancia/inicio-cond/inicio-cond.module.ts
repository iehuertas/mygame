import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioCondPageRoutingModule } from './inicio-cond-routing.module';

import { InicioCondPage } from './inicio-cond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioCondPageRoutingModule
  ],
  declarations: [InicioCondPage]
})
export class InicioCondPageModule {}
