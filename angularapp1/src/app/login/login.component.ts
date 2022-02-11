import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
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
    this.saveLogin();

    console.log("login successful");
    // this.router.navigate{["/institute"]};
  }
}