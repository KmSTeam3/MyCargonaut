import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentChoicePage } from './payment-choice.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentChoicePageRoutingModule {}
