import { Component, OnInit } from '@angular/core';
import{StagesService} from '../services/stages.service'
import{Router, ChildActivationStart} from '@angular/router';
import{HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
  categories = new FormControl();
  categoryList: string[] = ['Architecture IT et Cloud Computing','Network Infrastructure and Data Security','Embedded System','Development'];
  nomstage:string;
  description:string;
  category:string;
  stageUserDate={

    nomstage:this.nomstage,
    description:this.description,
    category:this.category

  };

  constructor(private _stage:StagesService,private router:Router,private http:HttpClient) { }
  //store file

  selectedFile:File=null;
  private _urlFile="http://localhost:3000/user/addstage"
  ngOnInit(){
  }
//add stage in the mongoDB
  addStage(){
    this._stage.addStage(this.stageUserDate)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );
      this.router.navigate(['/listage'])
  }
  //upload image
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
  }
  onUpload(){
    const fd= new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name)
    this.http.post(this._urlFile,fd)
      .subscribe(
        res=>console.log(res)
      )

  }
  }

