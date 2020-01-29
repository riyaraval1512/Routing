import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { SigninSignupFormComponent } from './authentication/signin-signup-form/signin-signup-form.component';
import { SigninSignupFormModule } from './authentication/signin-signup-form/signin-signup-form.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninSignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SigninSignupFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
