import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }
  signup(){
    console.log("Button click");
    this.router.navigate(["/signup"]);
  }
  login(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}