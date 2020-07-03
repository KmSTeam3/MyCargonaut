import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultPageRoutingModule } from './search-result-routing.module';

import { SearchResultPage } from './search-result.page';
import {ListResultPageModule} from './list-result/list-result.module';
import {MenuHeaderPageModule} from "../menu-header/menu-header.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchResultPageRoutingModule,
        ListResultPageModule,
        MenuHeaderPageModule
    ],
  declarations: [SearchResultPage]
})
export class SearchResultPageModule {}