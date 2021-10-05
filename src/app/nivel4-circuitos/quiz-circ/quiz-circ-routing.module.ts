import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizCircPage } from './quiz-circ.page';

const routes: Routes = [
  {
    path: '',
    component: QuizCircPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizCircPageRoutingModule {}
