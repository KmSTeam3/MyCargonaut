import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ModalDeliveryEditPageRoutingModule } from './modal-delivery-edit-routing.module';

import { ModalDeliveryEditPage } from './modal-delivery-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDeliveryEditPageRoutingModule
  ],
  declarations: [ModalDeliveryEditPage]
})
export class ModalDeliveryEditPageModule {}
