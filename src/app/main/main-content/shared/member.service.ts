import { Members } from './mock/mock-member';
import { Injectable } from '@angular/core';

export class Member {
    memberId:number;
    graduate:boolean;
    type: string;
    name: string;
    img: string;
    topics: string[];
    email: string;
    status: string;
    team: string;
    affiliation: string;
    personalPage: string;
}

@Injectable()
export class MemberService {

  constructor() { }

  getMembers():Member[] {
    return Members;
  }

}
