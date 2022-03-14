import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

import { FormControl,FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../user.service';
import { SignupPayload } from './signup.payload';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user: User = new User();
  signupform: FormGroup;
  signuppayload:SignupPayload;
  usertype:string;
  password;
  show = false;
  hide=true;
  constructor(private formBuilder : FormBuilder , private router:Router, private userService: UserService) { 
    this.signuppayload={
      username:'',
      email:'',
      mobileNumber:'',
      password:'',
      confirmPassword:''
    } 
  }
  loginpage(){
    console.log("Button Click");
    this.router.navigate(["/login"]);
  }
  homepage(){
    console.log("Button Click");
    this.router.navigate(["/homepage"]);
  }
  ngOnInit(): void {
    this.signupform = new FormGroup({
      username : new FormControl('', [Validators.required,Validators.minLength(6),Validators.pattern('^[a-z0-9_-]{8,15}$')]),
      email : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      mobileNumber : new FormControl('',
        [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
        ]),
        password : new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(16),
          Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$')]),
        confirmPassword : new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(16),
          Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$')])
    });
    this.password='password';
  }

  @ViewChild("myNameAdmin") myNameAdmin: ElementRef;
  @ViewChild("myNameUser") myNameUser: ElementRef;
  

  @ViewChild("myNameElem") myNameElem: ElementRef;

  // ^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$ [a-z0-9._%+-]
  saveUser(){
    this.user.userRole =  this.myNameElem.nativeElement.value;
    // if(this.myNameAdmin.nativeElement.value){
    //   this.user.userRole =  this.myNameAdmin.nativeElement.value;
    // }else{
    //   this.user.userRole =  "User";
    // }

    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data)
    }, error=>console.error());
  }
    onSubmit(e){
      this.signuppayload.email = this.signupform.get('email').value;
      this.signuppayload.username = this.signupform.get('username').value;
      this.signuppayload.mobileNumber = this.signupform.get('mobileNumber').value;
      this.signuppayload.password = this.signupform.get('password').value;
      this.signuppayload.confirmPassword = this.signupform.get('confirmPassword').value;
      
     
    }
    
    onClick() {
      if (this.password === 'password') {
        this.password = 'text';
        this.show = true;
      } 
      else {
        this.password = 'password';
        this.show = false;
      }
    }
    signupfunc(){
      this.saveUser();
      console.log(this.user)
      console.log("working")
      this.router.navigate(["/login"])
    }
}
