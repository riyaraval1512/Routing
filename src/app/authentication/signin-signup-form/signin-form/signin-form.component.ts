import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators}from '@angular/forms';
import {Iuserdata} from 'src/app/models/users.model';
import {Router} from '@angular/router';
import { SigninSignupService } from 'src/app/services/signin-signup.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:Router, private _signinSignupService:SigninSignupService){}

  public registerdata: Iuserdata[];
  err_msg:string;
  ngOnInit(){
    console.log(this._signinSignupService.userData);
    this.registerdata=this._signinSignupService.getData();
  }
  
  get Name(){
    return this.registrationForm.get('name');
  }
  get Password(){
    return this.registrationForm.get('password');
  }

  registrationForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required]]
  });

  SubmitData(){
    let selecteditem = this.registerdata.find(item => item.Password===this.Password.value && item.Name===this.Name.value);
    if(selecteditem){
    this.route.navigateByUrl('/products/productlist');
  }
  else{
    this.err_msg="Username or Password is incorrect.";
  }
}
}
