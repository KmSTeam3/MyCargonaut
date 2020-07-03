import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {MenuHeaderPageModule} from '../menu-header/menu-header.module';
import {UnauthorizedPageModule} from '../unauthorized/unauthorized.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        ProfilePageRoutingModule,
        MenuHeaderPageModule,
        UnauthorizedPageModule
    ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
