import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { DeliveryPageRoutingModule } from './delivery-routing.module';

import { DeliveryPage } from './delivery.page';
import { ModalDeliveryPageModule} from '../modal-delivery/modal-delivery.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryPageRoutingModule,
      ModalDeliveryPageModule
  ],
  declarations: [DeliveryPage]
})
export class DeliveryPageModule {}
