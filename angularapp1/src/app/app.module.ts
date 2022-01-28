import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AdminstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
