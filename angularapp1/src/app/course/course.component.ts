import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../service/course';
import { CourseService } from '../service/course.service'; 

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses : Course[];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.getCourse();
  }
  private getCourse(){
    this.courseService.getCourseList().subscribe(data=>{
      this.courses=data;
    });
  }

  updateCourse(id: number){
    this.router.navigate(['updatecourse',id]);
  }
  deleteCourse(id:number){
    this.courseService.deleteCourse(id).subscribe(data=>{
      console.log(data);
      this.getCourse(); 
      console.log("deleted");
    })
  }
}