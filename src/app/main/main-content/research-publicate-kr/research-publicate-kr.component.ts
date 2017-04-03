import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { PublicationsService } from '../../../shared/publications.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import * as _ from 'underscore';

@Component({
  selector: 'app-research-publicate-kr',
  templateUrl: './research-publicate-kr.component.html',
  styleUrls: ['./research-publicate-kr.component.scss']
})
export class ResearchPublicateKrComponent implements OnInit, OnDestroy {

  getDatas:any[];
  datas:any;
  id: string;
  subscription: Subscription;

  imgPath:string = '../../../../assets/Contents/';


  constructor(
    private publicationsService:PublicationsService,
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
    this.getPublication_kr();
  }

  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }

  getPublication_kr() {
    this.publicationsService.getPublications()
     .subscribe(items => {
        // kr
        this.getDatas = items.filter( item => item.type === 'domestic');
        // year
        this.datas = _.values(_.groupBy(this.getDatas,"year"))
          .reverse();
      });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
