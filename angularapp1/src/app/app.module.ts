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
import { AdmincourseComponent } from './admincourse/admincourse.component';
import { AdminstudentComponent } from './adminstudent/adminstudent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    ViewacademyComponent,
    EnrolledcourseComponent,
    AdminacademyComponent,
    AdmincourseComponent,
    AdminstudentComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
