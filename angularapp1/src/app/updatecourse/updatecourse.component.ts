import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Course } from '../service/course';
import { CourseService } from '../service/course.service';
import { FormControl,FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UpdatecoursePayload } from './updatecourse.payload';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
  
  updatecourseform: FormGroup;
  updatecoursepayload:UpdatecoursePayload;
  course: Course = new Course();
  id:number;
  coursetime: string;
  cousedue : string;

  constructor(private courseService: CourseService,private router:Router,private route:ActivatedRoute) { 
    this.updatecoursepayload={
      courseId:'',
      courseName:'',
      courseEnrolled:'',
      courseDescription:'',
      courseDuration:'',
      courseTiming:''


  } }

  ngOnInit(): void {
    this.updatecourseform = new FormGroup({
     // courseId : new FormControl('', [Validators.required,Validators.pattern('^[0-9_-]{1,40}$')]),
      courseName : new FormControl('', [Validators.required,Validators.pattern('^([A-Z+a-z+0-9_-]+.*?){2,40}$')]),
      courseEnrolled : new FormControl('', [Validators.required,Validators.min(1),Validators.max(250)]),
      courseDescription : new FormControl('')
    });
    this.id = this.route.snapshot.params['id'];
    this.courseService.getCourseById(this.id).subscribe(data => {
      this.course = data;
    }, error => console.log(error));
  }

  viewAcademy(){
    console.log("Button click");
  }
  viewCourse(){
    console.log("Button click");
  }
  viewStudents(){
    console.log("Button click");
  }
  logout(){
    console.log("button click");
  }



  saveCourse(){
    this.courseService.createCourse(this.course,this.course["courseTiming"] =this.coursetime, this.course["courseDuration"]=this.cousedue).subscribe(data => {
      console.log(data);
    },
    error => console.log(this.course));
  }

  @ViewChild("myNameElem") myNameElem: ElementRef;
  @ViewChild("myNameElemtoduration") myNameElemtoduration: ElementRef;
  @ViewChild("myNameElemfromtiming") myNameElemfromtiming : ElementRef;
  @ViewChild("myNameElemtotiming") myNameElemtotiming :ElementRef;
  @ViewChild("courseduration") courseduration : ElementRef;
  // updatecourse(){
  //   console.log(this.course);
    // this.coursetime = this.updatecourseform.get('').value + "";
    // this.coursetime = this.myNameElem.nativeElement.value + "TO " + this.myNameElemtoduration.nativeElement.value + "& " + this.myNameElemfromtiming.nativeElement.value + this.myNameElemtotiming.nativeElement.value ;
    // this.cousedue = this.courseduration.nativeElement.value;
    // this.saveCourse();
    // console.log("success");
    // alert("Course Updated Successfully!!!");
  updatecourse(){
    
    this.course.courseTiming = this.myNameElem.nativeElement.value + "TO " + this.myNameElemtoduration.nativeElement.value + "& " + this.myNameElemfromtiming.nativeElement.value + this.myNameElemtotiming.nativeElement.value ;
    this.course.courseDuration = this.courseduration.nativeElement.value;
    this.courseService.updateCourse(this.id, this.course).subscribe(data =>{
      alert("Course Updated Successfully!!!");
    },
    error=>console.log(error, alert("Error - Course Details Not Updated!!")));
    this.router.navigate(["/course"])
  }
  onSubmit(e){
    //this.updatecoursepayload.courseId= this.updatecourseform.get('courseId').value;
    this.updatecoursepayload.courseName = this.updatecourseform.get('courseName').value;
    this.updatecoursepayload.courseEnrolled = this.updatecourseform.get('courseEnrolled').value;
    this.updatecoursepayload.courseDescription = this.updatecourseform.get('courseDescription').value;

    this.updatecoursepayload.courseDuration=this.updatecourseform.get('courseDuration').value;
    this.updatecoursepayload.courseTiming=this.updatecourseform.get('courseTiming').value;
  }
} 

