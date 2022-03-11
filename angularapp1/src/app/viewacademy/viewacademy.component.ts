import { Component, OnInit } from '@angular/core';
import { Institute } from '../service/institute';
import { InstituteService } from '../service/institute.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-viewacademy',
  templateUrl: './viewacademy.component.html',
  styleUrls: ['./viewacademy.component.css']
})
export class ViewacademyComponent implements OnInit {

  institutes : Institute[];
  instituteName: any;

  constructor(private router: Router, private instituteService: InstituteService, public loginService:LoginService) { }

  ngOnInit(): void {
    this.getInsititute();

  }

  
  private getInsititute(){
    this.instituteService.getInstituteList().subscribe(data=>{
      this.institutes=data;
    });
  }
  public logout(){
    this.loginService.logOut();
    //this.router.navigate[('/login')]
  }
  institueEnroll(){
    this.router.navigate(["/institute-enroll"])
  }
  Search()
  {
    if(this.instituteName == ""){
      this.ngOnInit();
    }else{
      this.institutes = this.institutes.filter(res =>{
        return res.instituteName.toLocaleLowerCase().match(this.instituteName.toLocaleLowerCase());
      })
    }
  }
}
