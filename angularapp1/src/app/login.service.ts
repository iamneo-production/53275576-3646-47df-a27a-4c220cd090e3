import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = 'https://8080-bcdefdbbabbbeababfffcebfafdfadaefddc.examlyiopb.examly.io/api/v1/login';

  constructor(private httpClient: HttpClient) { }

  loginUser(login: Login):Observable<Object>{
    sessionStorage.setItem('email',login.email);
    return this.httpClient.post(`${this.baseURL}`,login)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('email')
    console.log(!(user===null))
    return !(user===null)
    }
    logOut(){
      sessionStorage.removeItem('email');
    }
}

 