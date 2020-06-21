import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportSearchPage } from './transport-search.page';

const routes: Routes = [
  {
    path: '',
    component: TransportSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportSearchPageRoutingModule {}
