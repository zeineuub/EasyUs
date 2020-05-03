import { Component, OnInit} from '@angular/core';
import { AuthService,GoogleLoginProvider} from 'angularx-social-login';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EasyUs';

  constructor(private flashMessage: FlashMessagesService) { }

  showFlash() {
        // 1st parameter is a flash message text
        // 2nd parameter is optional. You can pass object with options.
        this.flashMessage.show('Welcome To TheRichPost.com', { cssClass: 'alert-success', timeout: 2000 });
    }


}
