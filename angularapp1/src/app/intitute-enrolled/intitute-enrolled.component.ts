import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Course } from '../service/course';
import { CourseService } from '../service/course.service';
@Component({
  selector: 'app-intitute-enrolled',
  templateUrl: './intitute-enrolled.component.html',
  styleUrls: ['./intitute-enrolled.component.css']
})
export class IntituteEnrolledComponent implements OnInit {
  courses : Course[];
  constructor(private router: Router, private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCourse();
  }

  private getCourse(){
    this.courseService.getCourseList().subscribe(data=>{
      this.courses=data;
    });
  }

  enrolledCourse(){
    this.router.navigate(["/enrolledcourse"])
  }
}
