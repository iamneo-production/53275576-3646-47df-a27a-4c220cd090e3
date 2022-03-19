import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from './review';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseURL : "https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/review";


  constructor(private httpClient: HttpClient) { }
  getReviewList(): Observable<Review[]>{
    return this.httpClient.get<Review[]>("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/review")
  };
  createReview(review: Review): Observable<Object>{
    return this.httpClient.post("https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/addreview",review);
  }
  deleteReview(id:number):Observable<Object>{
    return this.httpClient.delete(`https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/review/${id}`)
  }

}
