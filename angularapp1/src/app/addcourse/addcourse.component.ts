import { Component, OnInit } from '@angular/core';
import { Course } from '../service/course';
import { CourseService } from '../service/course.service';
import { FormControl,FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AddcoursePayload } from './addcourse.payload';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  addcourseform: FormGroup;
  addcoursepayload:AddcoursePayload;
  course: Course = new Course();
  constructor(private courseService: CourseService) { 
    this.addcoursepayload={
      courseId:'',
      courseName:'',
      courseEnrolled:'',
      courseDescription:''
  } }

  ngOnInit(): void {
    this.addcourseform = new FormGroup({
      courseId : new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z+0-9_-]{2,40}$')]),
      courseName : new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z+0-9_-]{2,40}$')]),
      courseEnrolled : new FormControl('', [Validators.required,Validators.pattern('^[0-9]{1,40}$')]),
      courseDescription : new FormControl('', [Validators.pattern('^[A-Z+a-z+0-9]{2,40}$')])
    });
  }

  saveCourse(){
    this.courseService.createCourse(this.course).subscribe(data => {
      console.log(data);
    },
    error => console.log(this.course));
  }
  addcourse(){
    console.log(this.course);
    this.saveCourse();
    console.log("success");
  }
  onSubmit(e){
    this.addcoursepayload.courseId= this.addcourseform.get('courseId').value;
    this.addcoursepayload.courseName = this.addcourseform.get('courseName').value;
    this.addcoursepayload.courseEnrolled = this.addcourseform.get('courseEnrolled').value;
    this.addcoursepayload.courseDescription = this.addcourseform.get('courseDescription').value;
  }
}