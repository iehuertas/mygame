import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioResPageRoutingModule } from './inicio-res-routing.module';

import { InicioResPage } from './inicio-res.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioResPageRoutingModule
  ],
  declarations: [InicioResPage]
})
export class InicioResPageModule {}
