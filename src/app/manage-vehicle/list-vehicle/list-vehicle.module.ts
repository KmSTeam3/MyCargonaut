import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListVehiclePageRoutingModule } from './list-vehicle-routing.module';

import { ListVehiclePage } from './list-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListVehiclePageRoutingModule
  ],
  declarations: [ListVehiclePage]
})
export class ListVehiclePageModule {}
