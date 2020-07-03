import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentChoicePageRoutingModule } from './payment-choice-routing.module';

import { PaymentChoicePage } from './payment-choice.page';
import {MenuHeaderPageModule} from '../menu-header/menu-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PaymentChoicePageRoutingModule,
        MenuHeaderPageModule
    ],
  declarations: [PaymentChoicePage]
})
export class PaymentChoicePageModule {}
