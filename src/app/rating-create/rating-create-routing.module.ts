import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingCreatePage } from './rating-create.page';

const routes: Routes = [
  {
    path: '',
    component: RatingCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingCreatePageRoutingModule {}
