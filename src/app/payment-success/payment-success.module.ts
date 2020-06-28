import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSuccessPageRoutingModule } from './payment-success-routing.module';

import { PaymentSuccessPage } from './payment-success.page';
import {MenuHeaderPageModule} from "../menu-header/menu-header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PaymentSuccessPageRoutingModule,
        MenuHeaderPageModule
    ],
  declarations: [PaymentSuccessPage]
})
export class PaymentSuccessPageModule {}
