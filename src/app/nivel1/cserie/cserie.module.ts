import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CseriePageRoutingModule } from './cserie-routing.module';

import { CseriePage } from './cserie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CseriePageRoutingModule
  ],
  declarations: [CseriePage]
})
export class CseriePageModule {}
