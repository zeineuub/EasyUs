import { Component, OnInit } from '@angular/core';
import {NewsApiGlobal} from '../models/newsapi-global.model';
import{NewsApiService}from '../services/newsapi.service';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news= {articles:[]};
  constructor(private newsService: NewsApiService){}
   ngOnInit() {
    this.newsService.getArticles()
  		.subscribe(
  			response => this.news = response.json()
    );
  }

}
