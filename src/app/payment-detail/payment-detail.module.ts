import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentDetailPageRoutingModule } from './payment-detail-routing.module';

import { PaymentDetailPage } from './payment-detail.page';
import {ListResultPage} from '../search-result/list-result/list-result.page';
import {ListResultPageModule} from '../search-result/list-result/list-result.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentDetailPageRoutingModule,
    ListResultPageModule
  ],
  declarations: [PaymentDetailPage]
})
export class PaymentDetailPageModule {}
