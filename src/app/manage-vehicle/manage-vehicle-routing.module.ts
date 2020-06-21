import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageVehiclePage } from './manage-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: ManageVehiclePage
  },
  {
    path: 'add-vehicle',
    loadChildren: () => import('./add-vehicle/add-vehicle.module').then( m => m.AddVehiclePageModule)
  },
  {
    path: 'edit-vehicle',
    loadChildren: () => import('./edit-vehicle/edit-vehicle.module').then( m => m.EditVehiclePageModule)
  },
  {
    path: 'list-vehicle',
    loadChildren: () => import('./list-vehicle/list-vehicle.module').then( m => m.ListVehiclePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageVehiclePageRoutingModule {}