import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    AngularFireAuthModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
