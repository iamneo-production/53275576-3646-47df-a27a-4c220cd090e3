import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private routes:Router, private loginService:LoginService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      // if(sessionStorage.getItem('email')!=null){
      //   return true;
      // }
      // else{
      //   this.routes.navigate(['/login']);
      //   return false;
      // }
      if(this.loginService.isUserLoggedIn())
        return true;
      
      
        this.routes.navigate(['/homepage']);
        return false;
      
  }
}
