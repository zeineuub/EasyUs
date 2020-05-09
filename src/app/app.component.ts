import { Component, OnInit} from '@angular/core';
import{ AuthService }from './auth.service';
import{Router} from '@angular/router';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EasyUs';
registerUserdata={} as any;
loginUserdata={} as any;

constructor(private _auth:AuthService,private _router: Router) {}
ngOnInit(){

}

registerUser()
{
  console.log(this.registerUserdata);
  this._auth.registerUser(this.registerUserdata)
    .subscribe(
      res=> {
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/companies/all'])

      },
      err=> console.log(err)

    )};

loginUser(){
  console.log(this.loginUserdata);
  this._auth.loginUser(this.loginUserdata)
  .subscribe(
    res=> {
      console.log(res)
      //stoking the token
      localStorage.setItem('token',res.token)
      this._router.navigate(['/companies'])
    },
    err=> console.log(err)

  )}
}
