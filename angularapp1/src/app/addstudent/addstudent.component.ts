import { Component,  ElementRef, OnInit , ViewChild} from '@angular/core';
import { Student } from '../service/student';
import { StudentService } from '../service/student.service';
import { FormControl,FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AddstudentPayload } from './addstudent.payload';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  addstudentform: FormGroup;
  addstudentpayload:AddstudentPayload;
  student: Student = new Student();

  constructor(private studentService: StudentService) { 
    this.addstudentpayload={
      firstName:'',
    fatherName:'',
    motherName:'',
    emailId:'',
    age:'',
    enterSSCHSCmarks:'',
    lastName:'',
    phoneNumber:'',
    maleorfemale:'',
    phoneNumber2:'',
    houseNo:'',
    streetName:'',
    areaName:'',
    pincode:'',
    state:'',
    nationality:''
  } 
}

ngOnInit(): void {
  this.addstudentform = new FormGroup({
    // studentId: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{2,40}$')]),
    firstName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')]),
    fatherName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')]),
    motherName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')]),
    emailId:new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,30}$')]),
    age: new FormControl('', [Validators.required,Validators.min(10),Validators.max(110)]),
    lastName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{1,40}$')]),
    phoneNumber: new FormControl('', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    phoneNumber2: new FormControl('', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    houseNo: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{1,40}$')]),
    streetName: new FormControl('', [Validators.required,Validators.pattern('^([A-Z+a-z+0-9_-]+.*?){0,40}$')]),
    areaName: new FormControl('', [Validators.required,Validators.pattern('^([A-Z+a-z+0-9_-]+.*?){0,40}$')]),
    pincode: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{0,6}$')]),
    state: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{0,40}$')]),
    nationality: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')])

  });
}
saveStudent(){
  
    console.log(this.student);
  this.studentService.createStudent(this.student).subscribe(data=>{
    console.log(this.student);
    alert("Student Added Successfully!!!");

  },
    error => console.log(error,alert("Error - Student Not added!!")));
}
  addstudent(){
    console.log(this.student);
    
    this.saveStudent();
    console.log("success");
    // alert("Student Added Successfully!!!");
  }

  onSubmit(e){
    this.addstudentpayload.firstName= this.addstudentform.get('firstName').value;
    // this.addstudentpayload.studentId= this.addstudentform.get('studentId').value;
    this.addstudentpayload.fatherName = this.addstudentform.get('fatherName').value;
    this.addstudentpayload.motherName = this.addstudentform.get('motherName').value;
    this.addstudentpayload.emailId = this.addstudentform.get('emailId').value;
    this.addstudentpayload.age = this.addstudentform.get('age').value;
    // this.addstudentpayload.enterSSCHSCmarks = this.addstudentform.get('enterSSCHSCmarks').value;
    this.addstudentpayload.lastName = this.addstudentform.get('lastName').value;
    this.addstudentpayload.phoneNumber = this.addstudentform.get('phoneNumber').value;
    // this.addstudentpayload.maleorfemale = this.addstudentform.get('maleorfemale').value;
    this.addstudentpayload.phoneNumber2 = this.addstudentform.get('phoneNumber2').value;
    this.addstudentpayload.houseNo = this.addstudentform.get('houseNo').value;
    this.addstudentpayload.streetName = this.addstudentform.get('streetName').value;
    this.addstudentpayload.areaName = this.addstudentform.get('areaName').value;
    this.addstudentpayload.pincode = this.addstudentform.get('pincode').value;
    this.addstudentpayload.state = this.addstudentform.get('state').value;
    this.addstudentpayload.nationality = this.addstudentform.get('nationality').value;
  }
}

