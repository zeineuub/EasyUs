import { Component, OnInit } from '@angular/core';
import {NewsApiGlobal} from '../models/newsapi-global.model';
import{NewsApiService}from '../services/newsapi.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news= {articles:[]};
  constructor(private newsService: NewsApiService){}
   ngOnInit() {
    this.newsService.getArticles()
  		.subscribe(
  			response => this.news = response.json()
    );
  }



}
