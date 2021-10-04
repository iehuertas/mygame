import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioCbPageRoutingModule } from './inicio-cb-routing.module';

import { InicioCbPage } from './inicio-cb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioCbPageRoutingModule
  ],
  declarations: [InicioCbPage]
})
export class InicioCbPageModule {}
