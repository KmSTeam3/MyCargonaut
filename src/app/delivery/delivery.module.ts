import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { DeliveryPageRoutingModule } from './delivery-routing.module';

import { DeliveryPage } from './delivery.page';
import { ModalDeliveryPageModule} from './modal-delivery/modal-delivery.module';
import {DeliveryListPageModule} from './delivery-list/delivery-list.module';
import {MenuHeaderPageModule} from '../menu-header/menu-header.module';
import {UnauthorizedPageModule} from '../unauthorized/unauthorized.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DeliveryPageRoutingModule,
        ModalDeliveryPageModule,
        DeliveryListPageModule,
        MenuHeaderPageModule,
        UnauthorizedPageModule
    ],
  declarations: [DeliveryPage]
})
export class DeliveryPageModule {}
