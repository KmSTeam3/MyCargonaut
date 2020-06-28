import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EModalPage } from './e-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EModalPageRoutingModule {}
