import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizCbPage } from './quiz-cb.page';

const routes: Routes = [
  {
    path: '',
    component: QuizCbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizCbPageRoutingModule {}
