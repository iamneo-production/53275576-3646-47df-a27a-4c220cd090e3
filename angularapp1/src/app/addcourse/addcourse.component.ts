import { Component, OnInit } from '@angular/core';
import { Course } from '../service/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  course: Course = new Course();
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
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
}