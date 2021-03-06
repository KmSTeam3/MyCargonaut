import { DeleteVehiclePageModule } from './../delete-vehicle/delete-vehicle.module';
import { EditVehiclePageModule } from './../edit-vehicle/edit-vehicle.module';
import { DeleteVehiclePage } from './../delete-vehicle/delete-vehicle.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListVehiclePageRoutingModule } from './list-vehicle-routing.module';

import { ListVehiclePage } from './list-vehicle.page';
import { EditVehiclePage } from '../edit-vehicle/edit-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListVehiclePageRoutingModule,
    EditVehiclePageModule,
    DeleteVehiclePageModule
  ],
  declarations: [ListVehiclePage],
  exports: [
    ListVehiclePage
  ]
})


export class ListVehiclePageModule {}
