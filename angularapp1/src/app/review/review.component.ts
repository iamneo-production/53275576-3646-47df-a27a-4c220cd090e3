import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit
 {

  constructor(private router:Router) { }

  ngOnInit(): void 
  {
    
  }
  
  submit()
  {console.log("buttonclick");
    this.router.navigate(["/login"]);
    console.log("hi");
    alert("THANKS FOR YOUR REVIEW,YOU WILL BE LOGGED OUT NOW!!)");
  }

}
