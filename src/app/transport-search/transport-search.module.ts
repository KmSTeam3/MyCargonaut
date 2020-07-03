import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportSearchPageRoutingModule } from './transport-search-routing.module';

import { TransportSearchPage } from './transport-search.page';
import {MenuHeaderPageModule} from "../menu-header/menu-header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TransportSearchPageRoutingModule,
        ReactiveFormsModule,
        MenuHeaderPageModule
    ],
  declarations: [TransportSearchPage]
})
export class TransportSearchPageModule {}
