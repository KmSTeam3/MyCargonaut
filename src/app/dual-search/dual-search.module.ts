import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DualSearchPageRoutingModule } from './dual-search-routing.module';

import { DualSearchPage } from './dual-search.page';
import {MenuHeaderPageModule} from '../menu-header/menu-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DualSearchPageRoutingModule,
        ReactiveFormsModule,
        MenuHeaderPageModule
    ],
  declarations: [DualSearchPage]
})
export class DualSearchPageModule {}
