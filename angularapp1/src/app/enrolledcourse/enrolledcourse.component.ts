import { Component, OnInit } from '@angular/core';
import { Enrolledcoursepayload } from './enrolledcourse.payload';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Enrolledcourse } from '../service/enrolledcourse';
import { EnrolledcourseService } from '../service/enrolledcourse.service';
import { StudentService } from '../service/student.service';
import { Student } from '../service/student';
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
 // enrolledcourse1: Enrolledcourse = new Enrolledcourse();
 student: Student = new Student();

  constructor(private formbuilder:FormBuilder,private router:Router,private enrolledcourseservice:EnrolledcourseService,private studentService:StudentService) 
  
  
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
      //SSLCorHSCMarks:'',
      //maleorfemale:'',
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

      //SSLCorHSCMarks:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),

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
    this.enrolledcoursepayload.firstName = this.enrolledform.get('firstName').value;
    this.enrolledcoursepayload.lastName = this.enrolledform.get('lastName').value;
    this.enrolledcoursepayload.fatherName = this.enrolledform.get('fatherName').value;
    this.enrolledcoursepayload.motherName = this.enrolledform.get('motherName').value;
    this.enrolledcoursepayload.phoneNumber1 = this.enrolledform.get('phoneNumber1').value;
    this.enrolledcoursepayload.phoneNumber2 = this.enrolledform.get('phoneNumber2').value;
    //this.enrolledcoursepayload.SSLCorHSCMarks = this.enrolledform.get('SSLCorHSCMarks').value;

    this.enrolledcoursepayload.age = this.enrolledform.get('age').value;
    // this.enrolledcoursepayload.maleorfemale = this.enrolledform.get('maleorfemale').value;
    this.enrolledcoursepayload.emailId = this.enrolledform.get('emailId').value;
    this.enrolledcoursepayload.houseNo= this.enrolledform.get('houseNo').value;
    this.enrolledcoursepayload.streetName = this.enrolledform.get('streetName').value;
    this.enrolledcoursepayload.areaName = this.enrolledform.get('areaName').value;
    this.enrolledcoursepayload.pincode = this.enrolledform.get('pincode').value;
    this.enrolledcoursepayload.state = this.enrolledform.get('state').value;
    this.enrolledcoursepayload.nationality= this.enrolledform.get('nationality').value;    
  }
  enrollnow()
  {
    console.log("buttonclick");
  }
  saveEnrolledcourse(){
    console.log(this.student);
    this.studentService.createStudent(this.student).subscribe(data=>{
      console.log(this.student);
    },
    error => console.log(this.student));
  }
  addenrolledcourse(){
    console.log(this.student);
    this.saveEnrolledcourse();
    console.log("success");
    alert("Enrolled Course Added Successfully!!!");
  }

}