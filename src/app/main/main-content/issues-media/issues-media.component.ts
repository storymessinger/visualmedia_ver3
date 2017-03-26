import { DOCUMENT } from '@angular/platform-browser';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { PageScrollInstance, PageScrollService, PageScrollConfig } from 'ng2-page-scroll';
import { IssuesService } from '../../../shared/Issues.service';
import { Subscription } from 'rxjs/Rx';
import * as _ from 'underscore';

import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'app-issues-media',
  templateUrl: './issues-media.component.html',
  styleUrls: ['./issues-media.component.scss']
})
export class IssuesMediaComponent implements OnInit, OnDestroy {


  getDatas:any;
  datas:any;
  aYearDatas:any;
  id: string;

  private subscription: Subscription;

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
    ////

    this.getDatas= this.issuesService.getMedia();
    this.datas = _.values(_.groupBy(this.getDatas,"year"))
      .reverse();
   }

  /////
  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }
  //////

  ngOnInit() {
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
