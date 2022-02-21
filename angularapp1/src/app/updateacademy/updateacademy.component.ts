import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Institute } from '../service/institute';
import { InstituteService } from '../service/institute.service';

@Component({
  selector: 'app-updateacademy',
  templateUrl: './updateacademy.component.html',
  styleUrls: ['./updateacademy.component.css']
})
export class UpdateacademyComponent implements OnInit {
  id:number;
  institute: Institute = new Institute();

  constructor(private instituteService: InstituteService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.instituteService.getInstituteById(this.id).subscribe(data => {
      this.institute = data;
    }, error => console.log(error));
  }
  update(){
    this.instituteService.updateInstitute(this.id, this.institute).subscribe(data =>{
      this.goToInstitute();
    },
    error=>console.log("error"));
  }

  goToInstitute(){
    this.router.navigate(['/institute']);
  }
}
