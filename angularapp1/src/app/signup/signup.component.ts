import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user: User = new User();

  constructor(private router:Router, private userService: UserService) { }
  loginpage(){
    console.log("Button Click");
    this.router.navigate(["/login"]);
  }
  homepage(){
    console.log("Button Click");
    this.router.navigate(["/homepage"]);
  }
  ngOnInit(): void {
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data)
    }, error=>console.error());
  }
    onSubmit(){
      this.saveUser();
      console.log(this.user)
      console.log("working")
    }
}