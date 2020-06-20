import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteSearchPageRoutingModule } from './route-search-routing.module';

import { RouteSearchPage } from './route-search.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouteSearchPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RouteSearchPage]
})
export class RouteSearchPageModule {}
