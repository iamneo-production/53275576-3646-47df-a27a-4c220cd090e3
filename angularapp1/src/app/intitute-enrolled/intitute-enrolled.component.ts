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
  courseName: any;

  constructor(private router: Router, private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCourse();
  }

  private getCourse(){
    this.courseService.getCourseList().subscribe(data=>{
      this.courses=data;
    });
  }
  viewAcademy(){
    console.log("Button Click");
    this.router.navigate(["/viewacademy"]);

  }
  viewCourse(){
    console.log("Button Click");
    
  }
  
  logout(){
    this.router.navigate(["/homepage"]);


  }

  enrolledCourse(){
    this.router.navigate(["/enrolledcourse"])
  }

  Search(){
    if(this.courseName == ""){
      this.ngOnInit();
    }else{
      this.courses = this.courses.filter(res =>{
        return res.courseName.toLocaleLowerCase().match(this.courseName.toLocaleLowerCase());
      })
    }
  }
}
