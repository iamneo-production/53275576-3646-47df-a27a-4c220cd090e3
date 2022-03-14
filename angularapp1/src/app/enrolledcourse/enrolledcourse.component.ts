import { Component, OnInit } from '@angular/core';
import { Enrolledcoursepayload } from './enrolledcourse.payload';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Enrolledcourse } from '../service/enrolledcourse';
import { EnrolledcourseService } from '../service/enrolledcourse.service';
@Component
(
  {
  selector: 'app-enrolledcourse',
  templateUrl: './enrolledcourse.component.html',
  styleUrls: ['./enrolledcourse.component.css']
  }
)

export class EnrolledcourseComponent implements OnInit 

{

  enrolledform:FormGroup;
  enrolledcoursepayload:Enrolledcoursepayload;
  enrolledcourse: Enrolledcourse = new Enrolledcourse();
  enrolledcourseService: any;

  constructor(private formbuilder:FormBuilder,private router:Router,private enrolledcourseservice:EnrolledcourseService) 
  
  
  {
    this.enrolledcoursepayload={
      id:'',
      firstName:'',
      lastName:'',
      fatherName:'',
      motherName:'',
      phoneNumber1:'',
      emailId:'',
      age:'',
      phoneNumber2:'',
      SSLCorHSCMarks:'',
      maleorfemale:'',
      houseNo:'',
      streetName:'',
      areaName:'',
      pincode:'',
      state:'',
      nationality:''
    }

   }

  ngOnInit(): void
   {
    this.enrolledform=new FormGroup
    (

      { 

      id:new FormControl('', [Validators.required,Validators.maxLength(30),
          Validators.pattern('[0-9]*')]),
  
      firstName:new FormControl('', [Validators.required,Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*')]),

      lastName:new FormControl('',  [Validators.required,Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*')]),

      fatherName:new FormControl('',  [Validators.required,Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*')]),

      motherName:new FormControl('',  [Validators.required,Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*')]),

      phoneNumber1:new FormControl('', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),

      emailId : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.minLength(2)]),
      
      age:new FormControl('', [Validators.required,Validators.pattern("^(?:1[4-9]|[2-5][0-9]|60)$"),Validators.minLength(2)]),

      phoneNumber2:new FormControl('', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),

      SSLCorHSCMarks:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),

      houseNo:new FormControl('', [Validators.required]),

      streetName:new FormControl('', [Validators.required,Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*')]),

      areaName:new FormControl('', [Validators.required,Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*')]),

      pincode:new FormControl('', [Validators.required,Validators.pattern('^[0-9]{6}$')]),

      state:new FormControl('',  [Validators.required,Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*')]),

      nationality:new FormControl('',  [Validators.required,Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*')])
    }
    
    )
  }
  onSubmit(e)
  {
    this.enrolledcoursepayload.id = this.enrolledform.get('id').value;
    this.enrolledcoursepayload.firstName = this.enrolledform.get('firstname').value;
    this.enrolledcoursepayload.lastName = this.enrolledform.get('lastname').value;
    this.enrolledcoursepayload.fatherName = this.enrolledform.get('fathername').value;
    this.enrolledcoursepayload.motherName = this.enrolledform.get('mothername').value;
    this.enrolledcoursepayload.phoneNumber1 = this.enrolledform.get('phonenumber1').value;
    this.enrolledcoursepayload.phoneNumber2 = this.enrolledform.get('phonenumber2').value;
    this.enrolledcoursepayload.SSLCorHSCMarks = this.enrolledform.get('SSLCorHSCMarks').value;

    this.enrolledcoursepayload.age = this.enrolledform.get('age').value;
    this.enrolledcoursepayload.maleorfemale = this.enrolledform.get('maleorfemale').value;
    this.enrolledcoursepayload.emailId = this.enrolledform.get('email').value;
    this.enrolledcoursepayload.houseNo= this.enrolledform.get('houseNo').value;
    this.enrolledcoursepayload.streetName = this.enrolledform.get('streetName').value;
    this.enrolledcoursepayload.areaName = this.enrolledform.get('areaName').value;
    this.enrolledcoursepayload.pincode = this.enrolledform.get('pincode').value;
    this.enrolledcoursepayload.state = this.enrolledform.get('state').value;
    this.enrolledcoursepayload.nationality= this.enrolledform.get('nationality').value;    
  }

  viewAcademy()
  {
    console.log("Button Click");

  }
  
  viewCourse()
  {
    console.log("Button Click");
  }

  enrollnow()
  {
    console.log("buttonclick");
  }

  logout()
  {
    console.log("buttonclick");
    this.router.navigate(["/login"]);
  }
  saveEnrolledcourse(){
    console.log(this.enrolledcourse);
    this.enrolledcourseservice.createEnrolledcourse(this.enrolledcourse).subscribe(data=>{
      console.log(this.enrolledcourse);
    },
    error => console.log(this.enrolledcourse));
  }
  addenrolledcourse(){
    console.log(this.enrolledcourse);
    this.saveEnrolledcourse();
    console.log("success");
    alert("Enrolled Course Added Successfully!!!");
  }

}