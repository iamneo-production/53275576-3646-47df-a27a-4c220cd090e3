import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ReviewPayload } from './review.payload';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit
 {
   reviewform:FormGroup;
   reviewpayload:ReviewPayload;

  constructor(private router:Router, private formbuilder:FormBuilder ) {
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
      name:new FormControl('',[Validators.required,Validators.minLength(4)]),
      comments:new FormControl('',[Validators.required])
    })
  
  }
  onSubmit(e){
    this.reviewpayload.name=this.reviewform.get('name').value,
    this.reviewpayload.comments=this.reviewform.get('comments').value

    }

}
