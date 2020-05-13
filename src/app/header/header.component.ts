import { Component, OnInit } from '@angular/core';
import{ AuthService }from '../services/auth.service';

import{Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //data user
  email:string;
  password:string;
  name:string;

  //data company
  namecompany:string;
  emailcompany:string;
  passwordcompany:string;

  //array user registration
  registerUserdata={
    name:this.name,
    email:this.email,
    password:this.password
  }
  //array user login
  loginUserdata={
    email:this.email,
    password:this.password
  };
  //array company registration
  registerComdata={
    namecompany:this.namecompany,
    emailcompany:this.emailcompany,
    passwordcompany:this.passwordcompany
  };
  //array company login

  loginComdata={
    emailcompany:this.emailcompany,
    passwordcompany:this.passwordcompany
  }
  constructor(public  _auth:AuthService,private _router: Router) {}

  ngOnInit(): void {
  }
  //login and registration for User
  registerUser()
  {
    console.log(this.registerUserdata);
    this._auth.registerUser(this.registerUserdata)
      .subscribe(
        res=> {
          console.log(res)
           //storing the token in the frontend
          localStorage.setItem('token',res.token)
          this._router.navigate(['/loginUser'])

        },
        err=> console.log(err)

      )};

  loginUser(){
    console.log(this.loginUserdata);
    this._auth.loginUser(this.loginUserdata)
    .subscribe(
      res=> {
        console.log(res)
        //storing the token in the frontend
        localStorage.setItem('token',res.token)
        this._router.navigate(['/companies'])
      },
      err=> console.log(err)

    )}

//login and registration for companies
registerCom()
  {
    console.log(this.registerUserdata);
    this._auth.registerUser(this.registerUserdata)
      .subscribe(
        res=> {
          console.log(res)
           //storing the token in the frontend
          localStorage.setItem('token',res.token)
          this._router.navigate(['/loginComp'])

        },
        err=> console.log(err)

      )};

  loginCom(){
    console.log(this.loginComdata);
    this._auth.loginCom(this.loginComdata)
    .subscribe(
      res=> {
        console.log(res)
        //storing the token in the frontend
        localStorage.setItem('token',res.token)
        this._router.navigate(['/companies'])
      },
      err=> console.log(err)

    )}


}
