import { Member, MemberService } from './../shared/member.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-student',
  templateUrl: './member-student.component.html',
  styleUrls: ['./member-student.component.scss']
})
export class MemberStudentComponent implements OnInit {

  public students:Member[];

  constructor(private memberService:MemberService) { 
    this.students = this.memberService.getMembers();
  }

  ngOnInit() {
  }
}
