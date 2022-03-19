import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../service/review';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-adminreview',
  templateUrl: './adminreview.component.html',
  styleUrls: ['./adminreview.component.css']
})
export class AdminreviewComponent implements OnInit {

  review : Review[];


  constructor(Router:Router , private reviewService:ReviewService) { }
  ngOnInit(): void {
  }
  private getReview(){
    this.reviewService.getReviewList().subscribe(data=>{
      this.review=data;
    });
  }

  delete(id:number){
    
    this.reviewService.deleteReview(id).subscribe(data=>{
      console.log(data);
      this.getReview();
      console.log("deleted");
      alert("This review is deleted");
    })
    
    
  }


 

}
