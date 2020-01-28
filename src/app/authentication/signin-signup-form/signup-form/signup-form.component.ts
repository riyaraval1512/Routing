import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';
import {Iuserdata} from 'src/app/models/users.model';
import { Router } from '@angular/router';
import { SigninSignupService } from 'src/app/services/signin-signup.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private route:Router,private _signinSignupService: SigninSignupService){}
  public servicedata:Iuserdata[]; 
  err_msg:string;
  temp = false;
  ngOnInit(){
    this.servicedata=this._signinSignupService.userData;
  }
  
  get Name(){
    return this.registrationForm.get('name');
  }
  get Email(){
    return this.registrationForm.get('email');
  }
  get Password(){
    return this.registrationForm.get('password');
  }

  registrationForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required]],
    email:['',[Validators.email,Validators.required]]
  });
  addUserData(){
    if(this.temp){
    this._signinSignupService.userData.push({
      Name:this.Name.value,
      Password:this.Password.value,
      Email:this.registrationForm.get('email').value
    });     
    console.log(this._signinSignupService.userData);
    this.route.navigateByUrl('/signinsignup/signin');
    }
  }
  onKey(event){
    if(event.target.value==this.Password.value){
      this.err_msg="";
      this.temp = true;
      return this.temp;
    }
    else{
      this.err_msg="mismatch";
      this.temp = false;
      return this.temp;
    }
  }
}
