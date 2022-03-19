import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ReviewPayload } from './review.payload';
import { Review } from '../service/review';
import { ReviewService } from '../service/review.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit
 {
   reviewform:FormGroup;
   reviewpayload:ReviewPayload;
   review:Review =new Review();

  constructor(private router:Router, private formbuilder:FormBuilder,private reviewService:ReviewService ) {
    this.reviewpayload={
      name:'',
      comments:''
    }
   }
  userreview(){
    console.log("Button Click");
    this.router.navigate(["/userreview"]);
    alert("thanks for your review,no you can view other's reviews");
  }

  ngOnInit(): void 
  {
    this.reviewform=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      comments:new FormControl('',[Validators.required])
    })
  
  }
  saveReview(){
  
    console.log(this.review);
  this.reviewService.createReview(this.review).subscribe(data=>{
    console.log(this.review);

  },
    error => console.log(this.review));
}
  addreview(){
    console.log(this.review);
    
    this.saveReview();
    console.log("success");
    this.router.navigate(["/userreview"]);
    alert("review Added Successfully!!!");
  }
  onSubmit(e){
    this.reviewpayload.name=this.reviewform.get('name').value,
    this.reviewpayload.comments=this.reviewform.get('comments').value

    }

}
