import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Router} from '@angular/router'
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //url for user
  private _registerUrl="http://localhost:3000/user/register";
  private _loginUrl="http://localhost:3000/user/login";

  //url for company
  private _registerComUrl="http://localhost:3000/user/registerCom";
  private _loginComUrl="http://localhost:3000/user/loginCom";

  headers = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http:HttpClient,private router:Router) { }

  //registration and login for user
//accept a user obj return the response that the backend API sends
  registerUser(user){
    return this.http.post<any>(this._registerUrl,user,{ headers: this.headers});
  }

  //accept a user obj return the response that the backend API sends
  loginUser(user){

    return this.http.post<any>(this._loginUrl,user,{ headers: this.headers});

  }



//registration and login for company
registerCom(user){
  return this.http.post<any>(this._registerComUrl,user,{ headers: this.headers});
}

//accept a user obj return the response that the backend API sends
loginCom(user){

  return this.http.post<any>(this._loginComUrl,user,{ headers: this.headers});
}



  //if the token exists in the browser it gonna return true
  loggedIn(){
    return !! localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }


}


