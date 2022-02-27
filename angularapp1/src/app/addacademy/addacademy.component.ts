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
  addacademyform: FormGroup;
  addacademypayload:AddacademyPayload;
  

  
  constructor(private formBuilder : FormBuilder,private router:Router,private instituteService: InstituteService) { 
  this.addacademypayload={
    instituteId:'',
    imageUrl:'',
    instituteEmail:'',
    instituteName:'',
    mobileNumber:'',
    academyLocation:'',
    academyDesc:''
  } 
}
  ngOnInit(): void {
    this.addacademyform = new FormGroup({
      instituteId : new FormControl('', [Validators.required,Validators.pattern('^[0-9_-]{1,15}$')]),
      imageUrl : new FormControl('', [Validators.required]),
      instituteName : new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9_-]{3,40}$')]),
      instituteEmail : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      mobileNumber : new FormControl('', [Validators.required,Validators.pattern('^[0-9_-]{10}$')]),
      academyLocation : new FormControl('', [Validators.required,Validators.minLength(0),Validators.pattern('^[a-z0-9_-]{2,40}$')]),  
      academyDesc : new FormControl('', [Validators.required,Validators.minLength(0),Validators.pattern('^[A-Za-z0-9_-]{0,100}$')]),
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
    console.log(this.institute);
    this.saveInstitute();
    console.log("success");
  }
  saveInstitute(){
    this.instituteService.createInstitute(this.institute, this.institute["mobileNo"]="9850090998").subscribe(data => {
      console.log(data);
      console.log("mobile")
      console.log(data["mobileNo"])
      data["mobileNo"] = "9850090998"
    },
    error => console.log("error"));
  }
 
  onSubmit(e){
    this.addacademypayload.instituteId = this.addacademyform.get('instituteId').value;
    this.addacademypayload.imageUrl = this.addacademyform.get('imageUrl').value;
    this.addacademypayload.instituteName = this.addacademyform.get('instituteName').value;
    this.addacademypayload.instituteEmail = this.addacademyform.get('instituteEmail').value;
    this.addacademypayload.mobileNumber = this.addacademyform.get('mobileNumber').value;
    this.addacademypayload.academyLocation = this.addacademyform.get('academyLocation').value;
    this.addacademypayload.academyDesc = this.addacademyform.get('academyDesc').value;
  }
  
}
