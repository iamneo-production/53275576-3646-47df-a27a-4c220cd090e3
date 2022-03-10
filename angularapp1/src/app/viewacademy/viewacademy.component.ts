import { Component, OnInit } from '@angular/core';
import { Institute } from '../service/institute';
import { InstituteService } from '../service/institute.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewacademy',
  templateUrl: './viewacademy.component.html',
  styleUrls: ['./viewacademy.component.css']
})
export class ViewacademyComponent implements OnInit {

  institutes : Institute[];

  constructor(private router: Router, private instituteService: InstituteService) { }

  ngOnInit(): void {
    this.getInsititute();

  }

  private getInsititute(){
    this.instituteService.getInstituteList().subscribe(data=>{
      this.institutes=data;
    });
  }

  institueEnroll(){
    this.router.navigate(["/institute-enroll"])
  }
}
