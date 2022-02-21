import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from '../service/institute';
import { InstituteService } from '../service/institute.service';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {

  institutes : Institute[];

  constructor(private instituteService: InstituteService, private router: Router) { }

  ngOnInit(): void {
    this.getInsititute();
  }
  private getInsititute(){
    this.instituteService.getInstituteList().subscribe(data=>{
      this.institutes=data;
    });
  }

  updateInstitute(id: number){
    this.router.navigate(['updateacademy',id]);
  }
  deleteInstitute(id:number){
    this.instituteService.deleteInstitute(id).subscribe(data=>{
      console.log(data);
      this.getInsititute(); 
      console.log("deleted");
    })
  }
}
