import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MainpagePageRoutingModule } from './mainpage-routing.module';

import { MainpagePage } from './mainpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MainpagePageRoutingModule
  ],
  declarations: [MainpagePage]
})
export class MainpagePageModule {}
