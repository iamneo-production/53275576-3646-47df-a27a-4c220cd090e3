import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  filter: any;
  addCourse(course: Course) {
    throw new Error('Method not implemented.');
  }

  private baseURL : "https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/institute";
  constructor(private httpClient: HttpClient) { }

  getCourseList(): Observable<Course[]>{
    return this.httpClient.get<Course[]>("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/course")
  };

  createCourse(course: Course, coursetime: String, coursedu:String): Observable<Object>{
    return this.httpClient.post("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/addcourse",course);
  }

  // getCourseById(id: number):Observable<Course>{
  //   return this.httpClient.get<Course>(`${this.baseURL}/${id}`);
  // }

  
  getCourseById(id: number):Observable<Course>{
    return this.httpClient.get<Course>(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/course/${id}`);
  }

  updateCourse(id:number, course:Course): Observable<Object>{
    return this.httpClient.put(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/course/${id}`,course);
  }
  
  deleteCourse(id:number):Observable<Object>{
    return this.httpClient.delete(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/course/${id}`)
  }
}
