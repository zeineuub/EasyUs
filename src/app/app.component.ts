import { Component, OnInit} from '@angular/core';
import{AuthService} from './services/auth.service'
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EasyUs';
  constructor(public _authService: AuthService) { }


ngOnInit(){

}


}
