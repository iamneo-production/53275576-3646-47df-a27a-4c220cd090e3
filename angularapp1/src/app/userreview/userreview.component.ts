import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../service/review';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-userreview',
  templateUrl: './userreview.component.html',
  styleUrls: ['./userreview.component.css']
})
export class UserreviewComponent implements OnInit {

  reviews:Review[];
  

  constructor(private reviewService:ReviewService, Router:Router) { }
  

  ngOnInit(): void {
    this.getReview();
  }
  private getReview(){
    this.reviewService.getReviewList().subscribe(data=>{
      this.reviews=data;
    });
  }

}
