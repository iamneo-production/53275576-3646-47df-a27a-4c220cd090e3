import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { FormControl, FormGroup } from "@angular/forms";
import { UserService } from '../user.service';
import { RegisterFormSchema } from "./form-schema";
import { createYupValidator } from "./validator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user: User = new User();
  form = new FormGroup(
    {
      mobileNumber: new FormControl(),
      userName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()

    },
    {
      asyncValidators: createYupValidator({
        schema: RegisterFormSchema
        // context: () => this.data
      })
    }
  );

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
    onSubmit(e){
      this.saveUser();
      console.log(this.user)
      console.log("working")
    }
}