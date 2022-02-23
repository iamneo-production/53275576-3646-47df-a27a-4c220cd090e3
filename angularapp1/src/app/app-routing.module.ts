import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminacademyComponent } from './adminacademy/adminacademy.component';
import { ViewacademyComponent } from './viewacademy/viewacademy.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { InstituteComponent } from './institute/institute.component';
import { AddacademyComponent } from './addacademy/addacademy.component';
import { UpdateacademyComponent } from './updateacademy/updateacademy.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { CourseComponent } from './course/course.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { StudentComponent } from './student/student.component';
import { ViewinstituteComponent } from './viewinstitute/viewinstitute.component';
const routes: Routes = [
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'adminacademy',component:AdminacademyComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'viewacademy', component:ViewacademyComponent},
  {path:'displayuser',component:DisplayuserComponent},
  {path:'institute' ,component:InstituteComponent},
  {path:'addacademy' ,component:AddacademyComponent},
  {path:'updateacademy/:id' ,component:UpdateacademyComponent},
  {path:'addcourse' ,component:AddcourseComponent},
  {path:'updatecourse/:id',component:UpdatecourseComponent},
  {path:'course',component:CourseComponent},
  {path:'addstudent',component:AddstudentComponent},
  {path:'updatestudent',component:UpdatestudentComponent},
  {path:'student',component:StudentComponent},
  {path:'viewinstitute',component:ViewinstituteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
