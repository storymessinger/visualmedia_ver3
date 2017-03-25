import { IssuesService } from '../../../shared/Issues.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-news',
  templateUrl: './issues-news.component.html',
  styleUrls: ['./issues-news.component.scss']
})
export class IssuesNewsComponent implements OnInit {

  public news:any;

  constructor(private issuesService:IssuesService) {
    this.news = this.issuesService.getNews();
   }

  ngOnInit() {
  }

}
