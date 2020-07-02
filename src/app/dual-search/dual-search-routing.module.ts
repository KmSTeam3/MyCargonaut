import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DualSearchPage } from './dual-search.page';

const routes: Routes = [
  {
    path: '',
    component: DualSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DualSearchPageRoutingModule {}
