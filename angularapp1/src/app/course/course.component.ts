import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../service/course';
import { CourseService } from '../service/course.service'; 
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses : Course[];
  courseName: any;

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
  opensweetalert(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this file!',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No keep it'
    }).then((result) => {
      if(result.value) {
        this.courseService.deleteCourse(id).subscribe(data=>{
          console.log(data);
          this.getCourse();
          console.log("deleted");
          alert("Course Deleted Successfully!!!");
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted successfully.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelled',
          'Your file is safe :)',
          'error'
        )
      }
    })
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