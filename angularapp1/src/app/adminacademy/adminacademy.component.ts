import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminacademyPayload } from './adminacademy.payload';
@Component({
  selector: 'app-adminacademy',
  templateUrl: './adminacademy.component.html',
  styleUrls: ['./adminacademy.component.css']
})
export class AdminacademyComponent implements OnInit {
  adminacademyform: FormGroup;
  adminacademypayload:AdminacademyPayload;
  constructor(private router:Router) {
    this.adminacademypayload={
      academyName:'',
      imageUrl:'',
      academyLocation:'',
      contactNumber:'',
      emailId:'',
      academyDescription:''
    }
   }

  ngOnInit(): void {
    this.adminacademyform = new FormGroup({
      academyName : new FormControl('', [Validators.required,Validators.minLength(2),Validators.pattern('^[A-Za-z0-9_-]{2,40}$')]),
      imageUrl : new FormControl('', [Validators.required,Validators.minLength(2),Validators.pattern('^[A-Za-z0-9_-]{2,40}$')]),
      academyLocation : new FormControl('', [Validators.required,Validators.minLength(2),Validators.pattern('^[A-Za-z0-9_-]{2,40}$')]),
      contactNumber : new FormControl('',
        [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
        ]),
      emailId : new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,30}$')]),
      academyDescription : new FormControl('', [Validators.required,Validators.minLength(2),Validators.pattern('^[A-Za-z0-9_-/*]{2,100}$')])
    });
  }
  viewAcademy(){
    console.log("Button Click");

  }
  viewCourse(){
    console.log("Button Click");
  }
  viewStudents(){
    console.log("Button Click");
  }
  logout(){
    this.router.navigate(["/homepage"]);


  }
  addAcademy(){
    console.log("Button Click");

  }
  onSubmit(e){
    this.adminacademypayload.academyName = this.adminacademyform.get('academyName').value;
    this.adminacademypayload.imageUrl = this.adminacademyform.get('imageUrl').value;
    this.adminacademypayload.academyLocation = this.adminacademyform.get('academyLocation').value;
    this.adminacademypayload.contactNumber = this.adminacademyform.get('contactNumber').value;
    this.adminacademypayload.emailId = this.adminacademyform.get('emailId').value;
    this.adminacademypayload.academyDescription = this.adminacademyform.get('academyDescription').value;
  }
}
