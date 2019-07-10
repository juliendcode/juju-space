import { Component, OnInit } from '@angular/core';
import { NewsapiService } from './newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles;

  constructor(private newsApiService: NewsapiService) { }

  ngOnInit() {
    this.newsApiService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
