import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-intitute-enrolled',
  templateUrl: './intitute-enrolled.component.html',
  styleUrls: ['./intitute-enrolled.component.css']
})
export class IntituteEnrolledComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enrolledCourse(){
    this.router.navigate(["/enrolledcourse"])
  }
}
