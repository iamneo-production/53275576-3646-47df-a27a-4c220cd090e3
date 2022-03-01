import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Institute } from '../service/institute';
import { InstituteService } from '../service/institute.service';
import { FormControl,FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UpdateacademyPayload } from './updateacademy.payload';
@Component({
  selector: 'app-updateacademy',
  templateUrl: './updateacademy.component.html',
  styleUrls: ['./updateacademy.component.css']
})
export class UpdateacademyComponent implements OnInit {
  id:number;
  institute: Institute = new Institute();
  updateacademyform: FormGroup;
  updateacademypayload:UpdateacademyPayload;
  constructor(private instituteService: InstituteService,private route: ActivatedRoute,private router:Router) {
    this.updateacademypayload={
      imageUrl:'',
      emailId:'',
      academyName:'',
      contactNumber:'',
      academyLocation:'',
      academyDesc:''
    } 
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.instituteService.getInstituteById(this.id).subscribe(data => {
      this.institute = data;
    }, error => console.log(error));

    this.updateacademyform = new FormGroup({
      imageUrl : new FormControl('', [Validators.required]),
      academyName : new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9_-]{3,40}$')]),
      emailId : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      contactNumber : new FormControl('', [Validators.required,Validators.pattern('^[0-9_-]{10}$')]),
      academyLocation : new FormControl('', [Validators.required,Validators.minLength(0),Validators.pattern('^[a-z0-9_-]{2,40}$')]),  
      academyDesc : new FormControl('', [Validators.minLength(0),Validators.pattern('^[A-Za-z0-9_-]{0,100}$')]),
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
  updateAcademy(){
    this.instituteService.updateInstitute(this.id, this.institute).subscribe(data =>{
      this.goToInstitute();
      alert("Academy Updated Successfully!!!");
    },
    error=>console.log("error"));
  }

  onSubmit(e){
    this.updateacademypayload.imageUrl = this.updateacademyform.get('imageUrl').value;
    this.updateacademypayload.academyName = this.updateacademyform.get('academyName').value;
    this.updateacademypayload.emailId = this.updateacademyform.get('emailId').value;
    this.updateacademypayload.contactNumber = this.updateacademyform.get('contactNumber').value;
    this.updateacademypayload.academyLocation = this.updateacademyform.get('academyLocation').value;
    this.updateacademypayload.academyDesc = this.updateacademyform.get('academyDesc').value;
  }
  goToInstitute(){
    this.router.navigate(['/institute']);
  }
}