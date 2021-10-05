import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioCircPageRoutingModule } from './inicio-circ-routing.module';

import { InicioCircPage } from './inicio-circ.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioCircPageRoutingModule
  ],
  declarations: [InicioCircPage]
})
export class InicioCircPageModule {}
