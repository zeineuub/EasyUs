import { Component, OnInit} from '@angular/core';
import { AuthService,GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EasyUs';
  user:any;
  constructor(private socialAuthServ:AuthService){}
//method to actually sign with google
signIn(platform:string):void
{
  platform:GoogleLoginProvider.PROVIDER_ID;
  this.socialAuthServ.signIn(platform)
  .then(response=>{
    console.log(platform + "logged i user dara is="+ response);
    this.user=response;


  }
  );
}
//sign out method
signOut():void
{
  this.socialAuthServ.signOut();
  console.log("User Signed Out");
}



}
