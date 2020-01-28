import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {SigninFormComponent} from './signin-form/signin-form.component';;
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path:'signup', 
    component:SignupFormComponent
  },
  {
    path:'signin', 
    component:SigninFormComponent
  },
  { 
    path: '', 
    redirectTo: '/signinsignup/signin', 
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    SignupFormComponent,
    SigninFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    RouterModule,
    FormsModule
  ]
})
export class SigninSignupFormModule { }
