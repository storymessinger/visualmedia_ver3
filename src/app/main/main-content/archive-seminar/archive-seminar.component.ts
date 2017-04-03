import { PageScrollConfig, PageScrollInstance, PageScrollService } from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/platform-browser';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { SeminarService } from '../../../shared/seminars.service';
import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-archive-seminar',
  templateUrl: './archive-seminar.component.html',
  styleUrls: ['./archive-seminar.component.scss']
})
export class ArchiveSeminarComponent implements OnInit {


  getDatas:any;
  datas:any;
  id: string;
  subscription: Subscription;

  imgPath:string = '../../../../assets/Contents/People/smallimg/';

  constructor(
    private seminarService:SeminarService, 
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
    this.seminarService.getSeminars()
     .subscribe(items => {
        this.getDatas= items;
        this.datas = _.values(_.groupBy(this.getDatas,function(item){ return item["date"].split('.')[0] }))
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
}

