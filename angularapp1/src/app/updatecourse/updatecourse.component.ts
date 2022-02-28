import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../service/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
  id:number;
  course: Course = new Course();

  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.courseService.getCourseById(this.id).subscribe(data => {
      this.course = data;
    }, error => console.log(error));
  }
  updatecourse(){
    this.courseService.updateCourse(this.id, this.course).subscribe(data =>{
      this.goToCourse();
      alert("Course Updated Successfully!!!");
    },
    error=>console.log("error"));
  }
  goToCourse(){
    this.router.navigate(['/course']);
  }
}