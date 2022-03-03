import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  addStudent(student: Student) {
    throw new Error('Method not implemented.');
  }

  private baseURL : "https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/student";
  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/student")
  };

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/addstudent",student);
  }

  // getCourseById(id: number):Observable<Course>{
  //   return this.httpClient.get<Course>(`${this.baseURL}/${id}`);
  // }

  
  getStudentById(id: number):Observable<Student>{
    return this.httpClient.get<Student>(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/student/${id}`);
  }

  updateStudent(id:number, student:Student): Observable<Object>{
    return this.httpClient.put(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/updatestudent/${id}`,student);
  }
  
  deleteStudent(id:number):Observable<Object>{
    return this.httpClient.delete(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/student/${id}`)
  }
}
