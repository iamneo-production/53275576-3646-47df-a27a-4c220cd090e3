import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrolledcourse } from './enrolledcourse';

@Injectable({
  providedIn: 'root'
})
export class EnrolledcourseService {
  
  private baseURL : "https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/ecourse";
  constructor(private httpClient: HttpClient) { }

  getEnrolledcourseList(): Observable<Enrolledcourse[]>{
    return this.httpClient.get<Enrolledcourse[]>("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/ecourse")
  };

  createEnrolledcourse(enrolledcourse: Enrolledcourse): Observable<Object>{
    return this.httpClient.post("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/addecourse",enrolledcourse);
  }

  // getCourseById(id: number):Observable<Course>{
  //   return this.httpClient.get<Course>(`${this.baseURL}/${id}`);
  // }

  
  getEnrolledcourseById(id: number):Observable<Enrolledcourse>{
    return this.httpClient.get<Enrolledcourse>(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/ecourse/${id}`);
  }

  updateEnrolledcourse(id:number, enrolledcourse:Enrolledcourse): Observable<Object>{
    return this.httpClient.put(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/ecourse/${id}`,enrolledcourse);
  }
  
  deleteEnrolledcourse(id:number):Observable<Object>{
    return this.httpClient.delete(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/ecourse/${id}`)
  }
}