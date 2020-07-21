import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{StagesService} from '../services/stages.service'
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-liste-stage',
  templateUrl: './liste-stage.component.html',
  styleUrls: ['./liste-stage.component.scss']
})
export class ListeStageComponent implements OnInit {

  stages=[]
  constructor(private router:Router,private _stageService:StagesService) { }

  ngOnInit(){
    this._stageService.getListage()
    .subscribe(
      res=>this.stages=res,
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status==401)
          {
            this.router.navigate(['/home'])
          }
        }
      }
    )

  }


}
