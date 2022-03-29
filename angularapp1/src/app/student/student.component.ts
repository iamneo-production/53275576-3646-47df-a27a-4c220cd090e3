import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
// import { CrudService } from './crud.service';
import { Router } from '@angular/router';
import { Student } from '../service/student';
import { StudentService } from '../service/student.service';
import Swal from 'sweetalert2';

export interface PeriodicElement {
  name: string;
  Email: string;
  position: number;
  phone: number;
}


@Component({
  selector: 'app-Student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  students: Student[];
  firstName: any;
  constructor(private studentService:StudentService, private router: Router) { }
  searchKey : string;
  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent(){
    this.studentService.getStudentList().subscribe(data=>{
      this.students=data;
    });
  }

  updateStudent(id: number){
    this.router.navigate(['updatestudent',id]);
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
        this.studentService.deleteStudent(id).subscribe(data=>{
          console.log(data);
          this.getStudent(); 
          console.log("deleted");
          alert("Student Deleted Successfully!!!");
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
    if(this.firstName == ""){
      this.ngOnInit();
    }else{
      this.students = this.students.filter(res =>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  
  }
