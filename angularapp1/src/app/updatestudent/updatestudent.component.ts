import  { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Router } from '@angular/router';
import  { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import  { UpdateStudentPayload } from './updatestudent.payload';
import  { StudentService } from '../service/student.service';
import  { Student } from '../service/student';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit  {
 enrolledform:FormGroup;
  updatestudentpayload:UpdateStudentPayload;

  id: number ;
  student: Student= new Student();
  constructor(private formbuilder:FormBuilder,private router:Router, private studentService: StudentService, private route:ActivatedRoute) 
  {
    this.updatestudentpayload={
      firstName:'',
      lastName:'',
      fatherName:'',
      motherName:'',
      phoneNumber1:'',
      emailId:'',
      age:'',
      phoneNumber2:'',
      //SSLCorHSCMarks:'',
      maleorfemale:'',
      houseNo:'',
      streetName:'',
      areaName:'',
      pincode:'',
      state:'',
      nationality:''
    }

    }

  ngOnInit(): void  {
    this.id =this.route.snapshot.params['id'] ;
    this.studentService.getStudentById(this.id).subscribe(data=>{
      this.student = data;
    }, error => console.log(error)) ;

    this.enrolledform=new FormGroup({ 
      firstName:new FormControl('', [Validators.required]),
      lastName:new FormControl('', [Validators.required]),
      fatherName:new FormControl('', [Validators.required]),
      motherName:new FormControl('', [Validators.required]),
      phoneNumber1:new FormControl('', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      emailId : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      age:new FormControl('', [Validators.required]),
      phoneNumber2:new FormControl('', [Validators.maxLength(10),Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
     // SSLCorHSCMarks:new FormControl('', [Validators.required]),
     // maleorfemale:new FormControl('', [Validators.required]),
      houseNo:new FormControl('', [Validators.required]),
      streetName:new FormControl('', [Validators.required]),
      areaName:new FormControl('', [Validators.required]),
      pincode:new FormControl('', [Validators.required]),
      state:new FormControl('', [Validators.required]),
      nationality:new FormControl('', [Validators.required])
    })
  }
  onSubmit(e) {
    this.updatestudentpayload.firstName = this.enrolledform.get('firstname').value;
    this.updatestudentpayload.lastName = this.enrolledform.get('lastname').value;
    this.updatestudentpayload.fatherName = this.enrolledform.get('fathername').value;
    this.updatestudentpayload.motherName = this.enrolledform.get('mothername').value;
    this.updatestudentpayload.phoneNumber1 = this.enrolledform.get('phonenumber1').value;
    this.updatestudentpayload.phoneNumber2 = this.enrolledform.get('phonenumber2').value;
    //this.updatestudentpayload.SSLCorHSCMarks = this.enrolledform.get('SSLCorHSCMarks').value;
    this.updatestudentpayload.age = this.enrolledform.get('age').value;
    //this.updatestudentpayload.maleorfemale = this.enrolledform.get('maleorfemale').value;
    this.updatestudentpayload.emailId = this.enrolledform.get('email').value;
    this.updatestudentpayload.houseNo= this.enrolledform.get('houseNo').value;
    this.updatestudentpayload.streetName = this.enrolledform.get('streetName').value;
    this.updatestudentpayload.areaName = this.enrolledform.get('areaName').value;
    this.updatestudentpayload.pincode = this.enrolledform.get('pincode').value;
    this.updatestudentpayload.state = this.enrolledform.get('state').value;
    this.updatestudentpayload.nationality= this.enrolledform.get('nationality').value;    
  }
  viewAcademy() {
     console.log("Button Click");

  }
  viewCourse() {
     console.log("Button Click");
  }
  enrollnow() {
    this.studentService.updateStudent(this.id,this.student).subscribe(data=>{});
    alert("student Updated Successfully!!!");  
    this.router.navigate(["/student"])
  }
  viewStudent() {
     console.log("button click");
  }
  logout() {
     console.log("buttonclick");
     this.router.navigate(["/login"]);
  }

}
