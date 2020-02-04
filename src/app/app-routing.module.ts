import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import{SignupFormComponent} from 'src/app/authentication/signin-signup-form/signup-form/signup-form.component';
//import{SigninFormComponent} from 'src/app/authentication/signin-signup-form/signin-form/signin-form.component';
//import {SigninSignupFormModule} from './authentication/signin-signup-form/signin-signup-form.module'

const routes: Routes = [
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'signinsignup', 
    loadChildren: () => import('./authentication/signin-signup-form/signin-signup-form.module').then(m => m.SigninSignupFormModule)
  },
  {
    path:'products', 
    loadChildren: () => import('./product-master/product-list/product-list-routing.module').then(m => m.ProductListRoutingModule)
  },
  { 
    path: '', 
    redirectTo: '/signinsignup/signin', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
