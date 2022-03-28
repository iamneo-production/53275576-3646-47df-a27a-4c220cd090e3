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
    localStorage.setItem('email',login.email);

    return this.httpClient.post(`${this.baseURL}`,login)

  }
  
  isUserLoggedIn(){
    let user = localStorage.getItem('email')
    console.log(!(user==="undefined"))
    // if(user.includes("user")){}
    return (!(user==="undefined")&& !(user===null))
    }

    isAdmin(){
      let user =localStorage.getItem('email')
      return (user.includes('admin'))
    }
    isUser(){
      let user =localStorage.getItem('email')
      return (!(user==="undefined")&& !(user===null) && !user.includes('admin'))
      
    }
    logOut(){
      localStorage.removeItem('email');
    }
}

 