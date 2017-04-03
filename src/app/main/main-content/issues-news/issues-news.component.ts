import { Subscription } from 'rxjs/Rx';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { IssuesService } from '../../../shared/Issues.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as _ from 'underscore';

@Component({
  selector: 'app-issues-news',
  templateUrl: './issues-news.component.html',
  styleUrls: ['./issues-news.component.scss']
})
export class IssuesNewsComponent implements OnInit, OnDestroy {

  getDatas:any;
  datas:any;
  id: string;
  subscription:Subscription;
  imgPathSmall:string = '../../../../assets/Contents/Issues/smallimg/';
  imgPath:string = '../../../../assets/Contents/Issues/img/';

  test;

  constructor(
    private issuesService:IssuesService, 
    ////
    private scrollAbleService:ScrollAbleService,
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any
    ) {
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 300;
    this.subscription = this.scrollAbleService.getScroll()
      .subscribe(name => { 
        this.clickScrollTo(name);
      })
   }

   ngOnInit() {
    this.issuesService.getIssues()
    .subscribe(items => {
      let news = _.groupBy(items,'type');
      this.getDatas = news['news'];
      this.datas = _.values(_.groupBy(items,function(item){ return item["date"].split('.')[0] }))
        .reverse();
    });

   }

  /////
  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }
  //////

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
