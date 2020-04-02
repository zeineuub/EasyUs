import{Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs";
//Rjxs

import'rxjs/add/operator/toPromise';
import'rxjs/add/operator/map';

import {NewsApiArticle} from'../models/newsapi-article.model';
import { NewsApiGlobal } from '../models/newsapi-global.model';
@Injectable()
export class NewsApiService
{
  private baseUrl:string ='https://newsapi.org/v2/';
  private source:string ='the-next-web';
  private apiKey:string='02f67ce7d1294a2aa157a9854b88dc2d';

  constructor(private http:Http) {


}


public getArticles():Observable<any>{
  const url =`${this.baseUrl}top-headlines?sources=${this.source}&apiKey=${this.apiKey}`;
  //ok je t'envoie une req http
  return this.http.get(url)


}
}
