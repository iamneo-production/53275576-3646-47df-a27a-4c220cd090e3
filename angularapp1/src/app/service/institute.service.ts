import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institute } from './institute';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  private baseURL : "https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/institute";
  constructor(private httpClient: HttpClient) { }

  getInstituteList(): Observable<Institute[]>{
    return this.httpClient.get<Institute[]>("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/institute")
  };

  createInstitute(institute: Institute, mobileNo :string): Observable<Object>{
    return this.httpClient.post("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/addinstitute",institute);
  }

  // getInstituteById(id: number):Observable<Institute>{
  //   return this.httpClient.get<Institute>(`${this.baseURL}/${id}`);
  // }

  
  getInstituteById(id: number):Observable<Institute>{
    return this.httpClient.get<Institute>(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/institute/${id}`);
  }

  updateInstitute(id:number, institute:Institute): Observable<Object>{
    return this.httpClient.put(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/institute/${id}`,institute);
  }
  
  deleteInstitute(id:number):Observable<Object>{
    return this.httpClient.delete(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/institute/${id}`)
  }
}
