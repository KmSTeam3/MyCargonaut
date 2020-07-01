import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DualSearchPageRoutingModule } from './dual-search-routing.module';

import { DualSearchPage } from './dual-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DualSearchPageRoutingModule
  ],
  declarations: [DualSearchPage]
})
export class DualSearchPageModule {}
