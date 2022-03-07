import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import { CrudService } from './crud.service';
import { Router } from '@angular/router';
import { Student } from '../service/student';
import { StudentService } from '../service/student.service';

export interface PeriodicElement {
  name: string;
  Email: string;
  position: number;
  phone: number;
}


@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css']
})

export class StudentComponent implements OnInit {
  students: Student[];
  firstName: any;
  constructor(private studentService:StudentService, private router: Router) { }
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
  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(data=>{
      console.log(data);
      this.getStudent();
      console.log("deleted");
    })
  }
  // displayedColumns: string[] = ['position', 'name','Email', 'phone','actions'];
  

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
