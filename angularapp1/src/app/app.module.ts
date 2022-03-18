import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewacademyComponent } from './viewacademy/viewacademy.component';
import { EnrolledcourseComponent } from './enrolledcourse/enrolledcourse.component';
import { AdminacademyComponent } from './adminacademy/adminacademy.component';

import { AdminstudentComponent } from './adminstudent/adminstudent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import { UpdateacademyComponent } from './updateacademy/updateacademy.component';
import { InstituteComponent } from './institute/institute.component';
import { AddacademyComponent } from './addacademy/addacademy.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { CourseComponent } from './course/course.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { StudentComponent } from './student/student.component';
import { ViewinstituteComponent } from './viewinstitute/viewinstitute.component';
import { IntituteEnrolledComponent } from './intitute-enrolled/intitute-enrolled.component';
import { ReviewComponent } from './review/review.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminreviewComponent } from './adminreview/adminreview.component';
import { DisplaycourseComponent } from './displaycourse/displaycourse.component';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  ];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    ViewacademyComponent,
    EnrolledcourseComponent,
    AdminacademyComponent,
    AdminstudentComponent,
    HomepageComponent,
    DisplayuserComponent,
    UpdateacademyComponent,
    InstituteComponent,
    AddacademyComponent,
    AddcourseComponent,
    UpdatecourseComponent,
    CourseComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    StudentComponent,
    ViewinstituteComponent,
    IntituteEnrolledComponent,
    ReviewComponent,
    PagenotfoundComponent,
    AdminreviewComponent,
    DisplaycourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  exports: MATERIAL_MODULES,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
