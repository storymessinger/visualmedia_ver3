import { New, NewsService } from './../shared/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-news',
  templateUrl: './issues-news.component.html',
  styleUrls: ['./issues-news.component.scss']
})
export class IssuesNewsComponent implements OnInit {

  public news:New[];

  constructor(private newsService:NewsService) {
    this.news = this.newsService.getNews();
   }

  ngOnInit() {
  }

}
