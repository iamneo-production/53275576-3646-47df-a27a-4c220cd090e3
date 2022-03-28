import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';
import {LoginPayload} from './login.payload';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login: Login = new Login();
  loginform: FormGroup;
  public showPassword: boolean;
  loginpayload: LoginPayload;
  invaliduser = false;
  password;
  show = false;
  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email,
        Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password : new FormControl('', [Validators.required,
        Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$') ]),
    });
    this.password='password';
    this.saveLogin();
  }
  saveLogin(){
     this.loginService.loginUser(this.login).subscribe(data=>{
      console.log(data)
      if(data){
      let user = localStorage.getItem('email')

       if(user.includes("admin")){
        this.router.navigate(["/institute"]);
        alert("Admin login Successfully!!!");
       }
       else{
        this.router.navigate(["/viewacademy"]);
        alert("User Login Successfull!!!");
       }}
       else{
         alert("Login Unsuccessfull, Check your USER-ID and PASSWORD!!");
       }
    }, error=>console.error(error,this.router.navigate(['/login'])))
  }
  signuppage(){
    console.log("Button Click");
    this.router.navigate(["/signup"]);
  }
  homepage(){
    console.log("Button Click");
    this.router.navigate(["/homepage"]);
  }
  onSubmit(e){
    this.loginpayload.email = this.loginform.get('email').value;
    this.loginpayload.email = this.loginform.get('password').value;
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
  loginfunc() {
    
    this.saveLogin();
    // let user = localStorage.getItem('email')

    //    if(user.includes("admin")){
    //     this.router.navigate(["/institute"]);
    //     alert("Admin login Successfully!!!");
    //    }
    //    else{
    //     this.router.navigate(["/viewacademy"]);
    //     alert("Login Successfull to user");
    //    }

    // console.log("login successful");
    //this.router.navigate(["/viewacademy"]);
  }
}
