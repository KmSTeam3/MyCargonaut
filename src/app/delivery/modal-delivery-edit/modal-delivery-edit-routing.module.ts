import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDeliveryEditPage } from './modal-delivery-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDeliveryEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDeliveryEditPageRoutingModule {}
