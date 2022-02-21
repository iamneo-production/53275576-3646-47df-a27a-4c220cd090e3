import { Component, OnInit } from '@angular/core';
import { Institute } from '../service/institute';
import { InstituteService } from '../service/institute.service';

@Component({
  selector: 'app-addacademy',
  templateUrl: './addacademy.component.html',
  styleUrls: ['./addacademy.component.css']
})
export class AddacademyComponent implements OnInit {

  institute: Institute = new Institute();
  constructor(private instituteService: InstituteService) { }

  ngOnInit(): void {
  }

  saveInstitute(){
    this.instituteService.createInstitute(this.institute).subscribe(data => {
      console.log(data);
    },
    error => console.log(this.institute));
  }
  addinstitute(){
    console.log(this.institute);
    this.saveInstitute();
    console.log("success");
  }
}
