import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizCbPageRoutingModule } from './quiz-cb-routing.module';

import { QuizCbPage } from './quiz-cb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizCbPageRoutingModule
  ],
  declarations: [QuizCbPage]
})
export class QuizCbPageModule {}
