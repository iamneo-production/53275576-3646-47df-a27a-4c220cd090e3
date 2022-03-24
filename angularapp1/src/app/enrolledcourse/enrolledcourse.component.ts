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

  constructor(private formbuilder:FormBuilder,private router:Router,private enrolledcourseService:EnrolledcourseService,private studentService:StudentService) 
  {
    this.enrolledcoursepayload={
      firstName:'',
      lastName:'',
      fatherName:'',
      motherName:'',
      // phoneNumber1:'',
      // emailId:'',
      age:'',
      phoneNumber2:'',
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
    this.enrolledform = new FormGroup({
      firstName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')]),
      fatherName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')]),
      motherName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')]),
      // emailId:new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,30}$')]),
      age: new FormControl('', [Validators.required,Validators.min(10),Validators.max(110)]),
      lastName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')]),
      // phoneNumber1: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{1,40}$')]),
      phoneNumber2: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{1,40}$')]),
      houseNo: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{1,40}$')]),
      streetName: new FormControl('', [Validators.required,Validators.pattern('^([A-Z+a-z+0-9_-]+.*?){0,40}$')]),
      areaName: new FormControl('', [Validators.required,Validators.pattern('^([A-Z+a-z+0-9_-]+.*?){0,40}$')]),
      pincode: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{0,6}$')]),
      state: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{0,40}$')]),
      nationality: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')])
  
    });
  }
  onSubmit(e)
  {
    this.enrolledcoursepayload.firstName= this.enrolledform.get('firstName').value;
    this.enrolledcoursepayload.fatherName = this.enrolledform.get('fatherName').value;
    this.enrolledcoursepayload.motherName = this.enrolledform.get('motherName').value;
    // this.enrolledcoursepayload.emailId = this.enrolledform.get('emailId').value;
    this.enrolledcoursepayload.age = this.enrolledform.get('age').value;
    this.enrolledcoursepayload.lastName = this.enrolledform.get('lastName').value;
    // this.enrolledcoursepayload.phoneNumber1 = this.enrolledform.get('phoneNumber').value;
    this.enrolledcoursepayload.phoneNumber2 = this.enrolledform.get('phoneNumber2').value;
    this.enrolledcoursepayload.houseNo = this.enrolledform.get('houseNo').value;
    this.enrolledcoursepayload.streetName = this.enrolledform.get('streetName').value;
    this.enrolledcoursepayload.areaName = this.enrolledform.get('areaName').value;
    this.enrolledcoursepayload.pincode = this.enrolledform.get('pincode').value;
    this.enrolledcoursepayload.state = this.enrolledform.get('state').value;
    this.enrolledcoursepayload.nationality = this.enrolledform.get('nationality').value;
  }
  enrollnow()
  {
    console.log("buttonclick");
  }
  saveEnrolledcourse(){
    console.log(this.enrolledcourse1);
    this.enrolledcourseService.createEnrolledcourse(this.enrolledcourse1).subscribe(data=>{
      console.log(this.enrolledcourse1);
      alert("Enrolled Course Added Successfully!!!");

    },
    error => console.log(error, alert("Error - Not enrolled into the course!!")));
  }
  addenrolledcourse(){
    console.log(this.enrolledcourse1);
    this.saveEnrolledcourse();
    console.log("success");
    // alert("Enrolled Course Added Successfully!!!");
  }

}