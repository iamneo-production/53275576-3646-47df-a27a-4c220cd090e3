import { Component, OnInit } from '@angular/core';
import { Institute } from '../service/institute';
import { InstituteService } from '../service/institute.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl,FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Updateacademypayload } from './updateacademy.payload';

@Component({
  selector: 'app-updateacademy',
  templateUrl: './updateacademy.component.html',
  styleUrls: ['./updateacademy.component.css']
})
export class UpdateacademyComponent implements OnInit {

  institute: Institute = new Institute();
  updateacademyform: FormGroup;
  updateacademypayload:Updateacademypayload;
  id:number;

  
  constructor(private formBuilder : FormBuilder,private router:Router,private instituteService: InstituteService, private route:ActivatedRoute) { 
  this.updateacademypayload={
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
    this.updateacademyform = new FormGroup({
      instituteId : new FormControl('', [Validators.required,Validators.pattern('^[0-9_-]{1,15}$')]),
      imageUrl : new FormControl('', [Validators.required]),
      instituteName : new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern('^([A-Za-z0-9_-]+.*?){3,40}$')]),
      instituteEmail : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      mobileNumber : new FormControl('', [Validators.required,Validators.pattern('^[0-9_-]{10}$')]),
      academyLocation : new FormControl('', [Validators.required,Validators.minLength(0),Validators.pattern('^([a-z0-9_-]+.*?){2,40}$')]),  
      academyDesc : new FormControl('', [Validators.required,Validators.minLength(0),Validators.pattern('^([A-Za-z0-9_-]+.*?){0,100}$')]),
    });
    this.id = this.route.snapshot.params['id'];
    this.instituteService.getInstituteById(this.id).subscribe(data=>{
      this.institute = data;
    },error=>console.log(error));
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

  updateacademy(){
    console.log(this.institute);
    this.instituteService.updateInstitute(this.id,this.institute).subscribe(data=>{
      alert("institute updated successfully");
    })
    //this.saveInstitute();
    console.log("success");
  }
  // saveInstitute(){
  //   this.instituteService.createInstitute(this.institute).subscribe(data => {
  //     console.log(data);
  //     console.log("mobile")
  //     console.log(data["mobileNo"])
  //   },
  //   error => console.log("error"));
  // }
 
  onSubmit(e){
    this.updateacademypayload.instituteId = this.updateacademyform.get('instituteId').value;
    this.updateacademypayload.imageUrl = this.updateacademyform.get('imageUrl').value;
    this.updateacademypayload.instituteName = this.updateacademyform.get('instituteName').value;
    this.updateacademypayload.instituteEmail = this.updateacademyform.get('instituteEmail').value;
    this.updateacademypayload.mobileNumber = this.updateacademyform.get('mobileNumber').value;
    this.updateacademypayload.academyLocation = this.updateacademyform.get('academyLocation').value;
    this.updateacademypayload.academyDesc = this.updateacademyform.get('academyDesc').value;
  }
  
}
