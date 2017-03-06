import { Member, MemberService } from './../shared/member.service';
import { Component} from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-member-student',
  templateUrl: './member-student.component.html',
  styleUrls: ['./member-student.component.scss']
})
export class MemberStudentComponent {

  public students:Member[];

  constructor(private memberService:MemberService) { 
    this.students = this.memberService.getMembers();

    //* PageScroll Configuration
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 600;
    //*
  }
  
  onImgClick(target) {
    console.log(target);
  }
}
