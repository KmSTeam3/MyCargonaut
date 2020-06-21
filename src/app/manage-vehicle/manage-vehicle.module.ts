import { AddVehiclePage } from './add-vehicle/add-vehicle.page';

import { ListVehiclePage } from './list-vehicle/list-vehicle.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageVehiclePageRoutingModule } from './manage-vehicle-routing.module';

import { ManageVehiclePage } from './manage-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageVehiclePageRoutingModule
  ],
  declarations: [ManageVehiclePage, ListVehiclePage, AddVehiclePage]
})
export class ManageVehiclePageModule {}
