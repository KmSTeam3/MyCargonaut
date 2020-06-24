import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRatingsPage } from './user-ratings.page';

const routes: Routes = [
  {
    path: '',
    component: UserRatingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRatingsPageRoutingModule {}
