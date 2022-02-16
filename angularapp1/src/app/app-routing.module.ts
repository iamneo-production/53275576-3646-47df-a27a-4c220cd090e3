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
  {path:'updateacademy' ,component:UpdateacademyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
