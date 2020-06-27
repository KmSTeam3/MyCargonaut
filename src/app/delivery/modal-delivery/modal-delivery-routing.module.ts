import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDeliveryPage } from './modal-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDeliveryPageRoutingModule {}
