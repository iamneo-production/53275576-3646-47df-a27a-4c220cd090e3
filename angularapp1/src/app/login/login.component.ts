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
  loginpayload: LoginPayload;
  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(16)]),
    });
    this.saveLogin();
  }
  saveLogin(){
    this.loginService.loginUser(this.login).subscribe(data=>{console.log(data)}, error=>console.error())
  }
  signuppage(){
    console.log("Button Click");
    this.router.navigate(["/signup"]);
  }
  homepage(){
    console.log("Button Click");
    this.router.navigate(["/homepage"]);
  }
  loginfunc() {
    this.loginpayload.email = this.loginform.get('email').value;
    this.loginpayload.email = this.loginform.get('password').value;
    this.saveLogin();

    console.log("login successful");
    // this.router.navigate{["/institute"]};
  }
}