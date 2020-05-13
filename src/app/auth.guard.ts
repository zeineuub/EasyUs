import { Injectable } from '@angular/core';
import { CanActivate, RouterEvent, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private _router:Router,
             private _authService:AuthService){}
  canActivate():boolean{
    //if the user is authenticated
    //he can continue navigate
    if(this._authService.loggedIn()){
      return true
    }else{
      //if the user isn't authenticated we navigate to login page
      this._router.navigate(['/home'])
    }
  }
}
