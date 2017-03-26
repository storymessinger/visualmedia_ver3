import { IssuesService } from '../../../shared/Issues.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-issues-news',
  templateUrl: './issues-news.component.html',
  styleUrls: ['./issues-news.component.scss']
})
export class IssuesNewsComponent implements OnInit {

  getDatas:any;
  datas:any;
  id: string;

  constructor(private issuesService:IssuesService) {
    this.getDatas= this.issuesService.getNews();
    this.datas = _.values(_.groupBy(this.getDatas,"year"))
      .reverse();
    console.log(this.datas);
   }

  ngOnInit() {
  }

}
