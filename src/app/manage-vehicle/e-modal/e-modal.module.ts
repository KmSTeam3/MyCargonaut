import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EModalPageRoutingModule } from './e-modal-routing.module';

import { EModalPage } from './e-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EModalPageRoutingModule
  ],
  declarations: [EModalPage]
})
export class EModalPageModule {}
