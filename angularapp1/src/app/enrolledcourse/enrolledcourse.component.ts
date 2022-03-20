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
 enrolledcourse1: Enrolledcourse = new Enrolledcourse();
//  student: Student = new Student();

  constructor(private formbuilder:FormBuilder,private router:Router,private enrolledcourseService:EnrolledcourseService,private studentService:StudentService) 
  
  
  {
    this.enrolledcoursepayload={
      id:'',
      firstName:'',
      lastName:'',
      fatherName:'',
      motherName:'',
      //phoneNumber1:'',
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
    
  }
  onSubmit(e)
  {
    
  }
  enrollnow()
  {
    console.log("buttonclick");
  }
  saveEnrolledcourse(){
    console.log(this.enrolledcourse1);
    this.enrolledcourseService.createEnrolledcourse(this.enrolledcourse1).subscribe(data=>{
      console.log(this.enrolledcourse1);
    },
    error => console.log(this.enrolledcourse1));
  }
  addenrolledcourse(){
    console.log(this.enrolledcourse1);
    this.saveEnrolledcourse();
    console.log("success");
    alert("Enrolled Course Added Successfully!!!");
  }

}