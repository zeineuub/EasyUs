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
  news:NewsApiGlobal =new NewsApiGlobal();
  articles:any;
  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.getArticles().subscribe(data =>{for (const article of data['articles']) { this.articles.push(article) }console.log(data)})
  }

  ngOnInit(): void {
  }
}
