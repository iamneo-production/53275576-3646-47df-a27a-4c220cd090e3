import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from '../service/institute';
import { InstituteService } from '../service/institute.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {

  institutes : Institute[];
  instituteName: any;

  constructor(private instituteService: InstituteService, private router: Router) { }

  searchKey: string;

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
    this.instituteService.deleteInstitute(id).subscribe(data=>{
      console.log(data);
      this.getInsititute();
      console.log("updated");
      alert("Institute Updated Successfully!!!");
    })
  }
  opensweetalert(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No keep it'
    }).then((result) => {
      if(result.value) {
        this.instituteService.deleteInstitute(id).subscribe(data=>{
          console.log(data);
          this.getInsititute(); 
          console.log("deleted");
          alert("Institute Deleted Successfully!!!");
        })
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  Search(){
    if(this.instituteName == ""){
      this.ngOnInit();
    }else{
      this.institutes = this.institutes.filter(res =>{
        return res.instituteName.toLocaleLowerCase().match(this.instituteName.toLocaleLowerCase());
      })
    }
  }
}
