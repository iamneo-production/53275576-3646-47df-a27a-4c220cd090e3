import { Component, OnInit } from '@angular/core';
import { Institute } from '../service/institute';
import { InstituteService } from '../service/institute.service';
import { Router } from '@angular/router';
import { FormControl,FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AddacademyPayload } from './addacademy.payload';


@Component({
  selector: 'app-addacademy',
  templateUrl: './addacademy.component.html',
  styleUrls: ['./addacademy.component.css']
})
export class AddacademyComponent implements OnInit {

  institute: Institute = new Institute();
  addAcademyform: FormGroup;
  addacademypayload:AddacademyPayload;
  

  
  constructor(private formBuilder : FormBuilder,private router:Router,private instituteService: InstituteService) { 
  this.addacademypayload={
    academyName:'',
    emailId:'',
    contactNumber:'',
    academyLocation:''
  } 
}
  ngOnInit(): void {
    this.addAcademyform = new FormGroup({
      academyName : new FormControl('', [Validators.required,Validators.minLength(6),Validators.pattern('^[a-z0-9_-]{8,15}$')]),
      emailId : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      contactNumber : new FormControl('',
        [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
        ]),
      academyLocation : new FormControl('', [Validators.required])

        
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

  saveInstitute(){
    this.instituteService.createInstitute(this.institute).subscribe(data => {
      console.log(data);
    },
    error => console.log(this.institute));
  }
  onSubmit(e){
    this.addacademypayload.academyName = this.addAcademyform.get('academyName').value;
    this.addacademypayload.emailId = this.addAcademyform.get('emailId').value;
    this.addacademypayload.contactNumber = this.addAcademyform.get('contactNumber').value;
    this.addacademypayload.academyLocation = this.addAcademyform.get('academyLocation').value;
  }
  addAcademy(){
   


    console.log(this.institute);
    this.saveInstitute();
    console.log("success");
  }
}
