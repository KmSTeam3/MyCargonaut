import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteSearchPage } from './route-search.page';

const routes: Routes = [
  {
    path: '',
    component: RouteSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteSearchPageRoutingModule {}
