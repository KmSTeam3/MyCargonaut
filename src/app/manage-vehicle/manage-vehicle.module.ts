import { EditVehiclePageModule } from './edit-vehicle/edit-vehicle.module';
import { EditVehiclePage } from './edit-vehicle/edit-vehicle.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageVehiclePageRoutingModule } from './manage-vehicle-routing.module';

import { ManageVehiclePage } from './manage-vehicle.page';
import { ListVehiclePageModule } from './list-vehicle/list-vehicle.module';
import { AddVehiclePageModule } from './add-vehicle/add-vehicle.module';
import {MenuHeaderPageModule} from '../menu-header/menu-header.module';
import {UnauthorizedPageModule} from '../unauthorized/unauthorized.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ManageVehiclePageRoutingModule,
        ListVehiclePageModule,
        AddVehiclePageModule,
        MenuHeaderPageModule,
        UnauthorizedPageModule
    ],
  declarations: [ManageVehiclePage],
  exports: [ListVehiclePageModule, AddVehiclePageModule]
})
export class ManageVehiclePageModule {}
