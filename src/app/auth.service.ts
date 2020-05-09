import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl="http://localhost:3000/user/register";
  private _loginUrl="http://localhost:3000/user/login";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http:HttpClient) { }
//accept a user obj return the response that the backend API sends
  registerUser(user){
    return this.http.post<any>(this._registerUrl,user,{ headers: this.headers});
  }

  //accept a user obj return the response that the backend API sends
  loginUser(user){

    return this.http.post<any>(this._loginUrl,user,{ headers: this.headers});

  }

  //if the token exists in the browser it gonna return true
  loggedIn(){
    return !! localStorage.getItem('token')
  }

}


