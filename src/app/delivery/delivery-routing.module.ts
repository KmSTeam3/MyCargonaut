import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryPage } from './delivery.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryPage
  },  {
    path: 'delivery-list',
    loadChildren: () => import('./delivery-list/delivery-list.module').then( m => m.DeliveryListPageModule)
  },
  {
    path: 'modal-delivery-edit',
    loadChildren: () => import('./modal-delivery-edit/modal-delivery-edit.module').then( m => m.ModalDeliveryEditPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryPageRoutingModule {}
