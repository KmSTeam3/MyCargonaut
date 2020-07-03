import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListResultPage } from './list-result.page';

const routes: Routes = [
  {
    path: '',
    component: ListResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListResultPageRoutingModule {}
