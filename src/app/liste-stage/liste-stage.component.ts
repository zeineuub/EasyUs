import { Component, OnInit } from '@angular/core';

import{StagesService} from '../services/stages.service'
@Component({
  selector: 'app-liste-stage',
  templateUrl: './liste-stage.component.html',
  styleUrls: ['./liste-stage.component.scss']
})
export class ListeStageComponent implements OnInit {

  stages=[]
  constructor(private _stageService:StagesService) { }

  ngOnInit(){
    this._stageService.getListage()
    .subscribe(
      res=>this.stages=res,
      err=>console.log(err)
    )

  }

}
