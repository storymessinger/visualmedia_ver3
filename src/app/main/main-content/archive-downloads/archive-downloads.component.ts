import { Subscription } from 'rxjs/Rx';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { DownloadService } from '../../../shared/downloads.service';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-archive-downloads',
  templateUrl: './archive-downloads.component.html',
  styleUrls: ['./archive-downloads.component.scss']
})
export class ArchiveDownloadsComponent implements OnInit {


  getDatas:any;
  datas:any;
  id: string;
  subscription:Subscription;

  imgPath:string = '../../../../assets/Contents/';

  constructor(
    private downloadService:DownloadService,
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
    this.downloadService.getDownloads()
     .subscribe(items => {
        this.getDatas= items;
        this.datas = _.values(_.groupBy(this.getDatas,"year"))
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

