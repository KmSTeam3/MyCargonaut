import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteVehiclePageRoutingModule } from './delete-vehicle-routing.module';

import { DeleteVehiclePage } from './delete-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteVehiclePageRoutingModule
  ],
  declarations: [DeleteVehiclePage],
  exports: [DeleteVehiclePage]
})
export class DeleteVehiclePageModule {}
