import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVehiclePage } from './list-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: ListVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListVehiclePageRoutingModule {}
