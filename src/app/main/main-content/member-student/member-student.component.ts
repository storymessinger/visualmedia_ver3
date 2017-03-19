import { Subscription } from 'rxjs/Rx';
import { ScrollAbleService } from './../shared/scroll-able.service';
import { MemberService } from './../shared/member.service';
import { Component, OnDestroy, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollConfig, PageScrollInstance, PageScrollService } from 'ng2-page-scroll';

@Component({
  selector: 'app-member-student',
  templateUrl: './member-student.component.html',
  styleUrls: ['./member-student.component.scss']
})
export class MemberStudentComponent implements OnDestroy {

  public getDatas:any[];
  public datas:any;

  subscription:Subscription;

  constructor(
    private memberService:MemberService, 
    private scrollAbleService:ScrollAbleService,
    private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any
    ) { 
    //* PageScroll Configuration
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 300;
    //*
    this.subscription = this.scrollAbleService.getScroll()
      .subscribe(name => { 
        this.clickProfessor(name);
      })
    //
    this.getDatas= this.memberService.getMembers();
    this.datas = groupBy(this.getDatas, 'type');
  }
  
  clickProfessor(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }


  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}
