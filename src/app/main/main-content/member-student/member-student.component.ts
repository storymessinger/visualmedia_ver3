import { Subscription } from 'rxjs/Rx';
import { ScrollAbleService } from './../shared/scroll-able.service';
import { MemberService } from './../shared/member.service';
import { Component, OnDestroy} from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-member-student',
  templateUrl: './member-student.component.html',
  styleUrls: ['./member-student.component.scss']
})
export class MemberStudentComponent {


  public getDatas:any[];
  public datas:any;

  message:any;
  subscription:Subscription;

  constructor(private memberService:MemberService, private scrollAbleService:ScrollAbleService) { 
    this.subscription = this.scrollAbleService.getMessage()
      .subscribe(message => { 
        this.onShout();
        this.message = message; 
      })
    //
    this.getDatas= this.memberService.getMembers();
    this.datas = groupBy(this.getDatas, 'type');
    //* PageScroll Configuration
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 0;
    //*
  }
  
  onImgClick(target) {
    console.log(target);
  }
  onShout(){
    alert('done');
  }
}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}
