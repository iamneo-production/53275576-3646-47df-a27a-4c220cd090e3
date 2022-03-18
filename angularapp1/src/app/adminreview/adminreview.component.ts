import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminreview',
  templateUrl: './adminreview.component.html',
  styleUrls: ['./adminreview.component.css']
})
export class AdminreviewComponent implements OnInit {

  constructor(Router:Router) { }
  delete(){
    alert("This response is deleted");
  }

  ngOnInit(): void {
  }

}
