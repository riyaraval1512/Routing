import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { SigninSignupFormComponent } from './authentication/signin-signup-form/signin-signup-form.component';
import { SigninSignupFormModule } from './authentication/signin-signup-form/signin-signup-form.module';
// import { ProductListComponent } from './product-master/product-list/product-list.component';
// import { AddProductComponent } from './product-master/product-list/add-product/add-product.component';
// import { DeleteProductComponent } from './product-master/product-list/delete-product/delete-product.component';
// import { StockUpdateComponent } from './product-master/product-list/stock-update/stock-update.component';
// import { AddProductToCartComponent } from './product-master/product-list/add-product-to-cart/add-product-to-cart.component';
// import { GradeDirective } from './directives/grade.directive';
//import { SigninFormComponent } from './authentication/signin-signup-form/signin-form/signin-form.component';
//import { SignupFormComponent } from './authentication/signin-signup-form/signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninSignupFormComponent,
    //AddProductToCartComponent,
  //  SigninFormComponent,
  // SignupFormComponent
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
