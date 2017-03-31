import { MemberService } from './../../../shared/member.service';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { PublicationsService } from '../../../shared/publications.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import * as _ from 'underscore';

@Component({
  selector: 'app-research-publicate',
  templateUrl: './research-publicate.component.html',
  styleUrls: ['./research-publicate.component.scss']
})
export class ResearchPublicateComponent implements OnInit, OnDestroy {


  getDatas:any[];
  datas:any;
  id: string;
  subscription: Subscription;

  authors:string;

  imgPath:string = '../../../../assets/Contents/';


  constructor(
    private publicationsService:PublicationsService,
    private scrollAbleService:ScrollAbleService,
    private pageScrollService: PageScrollService, 
    private memberService: MemberService,
    @Inject(DOCUMENT) private document: any
    ) {
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 300;
    this.subscription = this.scrollAbleService.getScroll()
      .subscribe(name => { 
        this.clickScrollTo(name);
      })

    this.getDatas= this.publicationsService.getPublicationsInt();
    this.datas = _.values(_.groupBy(this.getDatas,"year"))
      .reverse();
   }

  ngOnInit() {
  }

  // getAuthorName(str) {
  //   const authorNumberArr = str.split('+');
  //   const authorArr = authorNumberArr.map ( num => {
  //     return this.memberService.getMembers(parseInt(num));
  //   })
  //   this.authors = authorArr.join(', ');
  // }

  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }
  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}

