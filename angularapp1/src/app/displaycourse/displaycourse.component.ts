import { Component, OnInit } from '@angular/core';
import { Course } from '../service/course';
import { CourseService } from '../service/course.service';
import { Enrolledcourse } from '../service/enrolledcourse';
import { EnrolledcourseService } from '../service/enrolledcourse.service';

@Component({
  selector: 'app-displaycourse',
  templateUrl: './displaycourse.component.html',
  styleUrls: ['./displaycourse.component.css']
})
export class DisplaycourseComponent implements OnInit {

  courses:Course[];
  ecourse:Enrolledcourse[];
  constructor(private courseService : CourseService, private enrolledcoursService:EnrolledcourseService) { }

  ngOnInit(): void {
    this.getCourse();
  }
  private getCourse(){
    this.enrolledcoursService.getEnrolledcourseList().subscribe(data=>{
      this.ecourse=data;
    });
  }


}
