import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListResultPageRoutingModule } from './list-result-routing.module';

import { ListResultPage } from './list-result.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListResultPageRoutingModule
    ],
    exports: [
        ListResultPage
    ],
    declarations: [ListResultPage]
})
export class ListResultPageModule {}
