import { AddVehiclePage } from './add-vehicle/add-vehicle.page';

import { ListVehiclePage } from './list-vehicle/list-vehicle.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageVehiclePageRoutingModule } from './manage-vehicle-routing.module';

import { ManageVehiclePage } from './manage-vehicle.page';
import {ListVehiclePageModule} from './list-vehicle/list-vehicle.module';
import {AddVehiclePageModule} from './add-vehicle/add-vehicle.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageVehiclePageRoutingModule,
    ListVehiclePageModule,
    AddVehiclePageModule,
  ],
  declarations: [ManageVehiclePage],
  exports: [ListVehiclePageModule, AddVehiclePageModule]
})
export class ManageVehiclePageModule {}
