import { MemberService } from './../shared/member.service';
import { Component} from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-member-student',
  templateUrl: './member-student.component.html',
  styleUrls: ['./member-student.component.scss']
})
export class MemberStudentComponent {

  public getDatas:any[];
  public datas:any;

  constructor(private memberService:MemberService) { 
    this.getDatas= this.memberService.getMembers();

    //* PageScroll Configuration
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 0;
    //*

    this.datas = groupBy(this.getDatas, 'type');
  }
  
  onImgClick(target) {
    console.log(target);
  }
}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}
