import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizCircPageRoutingModule } from './quiz-circ-routing.module';

import { QuizCircPage } from './quiz-circ.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizCircPageRoutingModule
  ],
  declarations: [QuizCircPage]
})
export class QuizCircPageModule {}
