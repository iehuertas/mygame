import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CparaleloPageRoutingModule } from './cparalelo-routing.module';

import { CparaleloPage } from './cparalelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CparaleloPageRoutingModule
  ],
  declarations: [CparaleloPage]
})
export class CparaleloPageModule {}
