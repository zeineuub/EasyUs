import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{StagesService} from '../services/stages.service';
import { HttpErrorResponse } from '@angular/common/http';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stages=[]
  constructor(private router:Router,private _stage:StagesService){}
   ngOnInit() {
    this._stage.getsomestage()
      .subscribe(
        res=>this.stages=res,
        err=>{
          if(err instanceof HttpErrorResponse){
            if(err.status==401)
            {
              console.log('something is wrong')
            }
          }
        }

      )



  }
onList(){
  this.router.navigate(['/listage'])
}


}
