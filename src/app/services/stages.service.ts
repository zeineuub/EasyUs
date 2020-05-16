import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StagesService {
  private _stageUrl="http://localhost:3000/user/addstage";
  private _listageUrl="http://localhost:3000/user/Listage"
  constructor(private http:HttpClient) { }
  //acceptes a stage object and returns the response that the backend API sends

  addStage(stage){

    return this.http.post<any>(this._stageUrl,stage)
  }
  //return all the stages
  getListage(){
    return this.http.get<any>(this._listageUrl)

  }
}
