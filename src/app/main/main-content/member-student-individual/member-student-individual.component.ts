import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { MemberService } from './../../../shared/member.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-student-individual',
  templateUrl: './member-student-individual.component.html',
  styleUrls: ['./member-student-individual.component.scss']
})
export class MemberStudentIndividualComponent implements OnInit {

  subscription: Subscription;
  id: number;
  memberItem: any;
  topicsArr: any[];
  imgPath:string = '../../../../assets/Contents/People/img/';

  constructor(private memberService: MemberService, private activatedRoute:ActivatedRoute) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.id = parseInt(param['id']);
        })
    this.memberItem = this.memberService.getMembers(this.id);
    this.topicsArr = this.memberItem.topics.split(',');
  }

  ngOnInit() {
  }

}
