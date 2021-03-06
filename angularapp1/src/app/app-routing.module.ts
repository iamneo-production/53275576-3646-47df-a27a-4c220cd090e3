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
import { IntituteEnrolledComponent } from './intitute-enrolled/intitute-enrolled.component';
import { EnrolledcourseComponent } from './enrolledcourse/enrolledcourse.component';
import { ReviewComponent } from './review/review.component';
import { AuthguardService } from './authguard.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminreviewComponent } from './adminreview/adminreview.component';
import { DisplaycourseComponent } from './displaycourse/displaycourse.component';
import { UserreviewComponent } from './userreview/userreview.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
import { AdminguardService } from './adminguard.service';

const routes: Routes = [
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'adminacademy',component:AdminacademyComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'viewacademy', component:ViewacademyComponent,canActivate:[AuthguardService]},
  {path:'displayuser',component:DisplayuserComponent, canActivate:[AuthguardService]},
  {path:'institute' ,component:InstituteComponent,canActivate:[AdminguardService]},
  {path:'addacademy' ,component:AddacademyComponent,canActivate:[AdminguardService]},
  {path:'updateacademy/:id' ,component:UpdateacademyComponent,canActivate:[AdminguardService]},
  {path:'addcourse' ,component:AddcourseComponent,canActivate:[AdminguardService]},
  {path:'updatecourse/:id',component:UpdatecourseComponent,canActivate:[AdminguardService]},
  {path:'course',component:CourseComponent,canActivate:[AdminguardService]},
  {path:'addstudent',component:AddstudentComponent,canActivate:[AdminguardService]},
  {path:'updatestudent/:id',component:UpdatestudentComponent,canActivate:[AdminguardService]},
  {path:'student',component:StudentComponent,canActivate:[AdminguardService]},
  {path:'viewinstitute',component:ViewinstituteComponent,canActivate:[AuthguardService]},
  {path:'institute-enroll',component:IntituteEnrolledComponent,canActivate:[AuthguardService]},
  {path:'enrolledcourse',component:EnrolledcourseComponent,canActivate:[AuthguardService]},
  {path:'review',component:ReviewComponent,canActivate:[AuthguardService]},
  {path:'adminreview',component:AdminreviewComponent,canActivate:[AdminguardService]},
  {path:'displaycourse',component:DisplaycourseComponent,canActivate:[AuthguardService]},
  {path:'userreview',component:UserreviewComponent,canActivate:[AuthguardService]},
  {path:'payment',component:PaymentComponent,canActivate:[AdminguardService]},
  {path:'viewpayment',component:ViewpaymentComponent, canActivate:[AdminguardService]},  
  {path:'error', component:PagenotfoundComponent},

  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
