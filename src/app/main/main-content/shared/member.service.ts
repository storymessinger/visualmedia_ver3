import { Members } from './mock/mock-member';
import { Injectable } from '@angular/core';

export class Member {
    type: string;
    img: string;
    name: string;
    status: string;
    topics: string[];
    email: string;
    team: string;
    affiliation: string;
    personal_page: string;
}

@Injectable()
export class MemberService {

  constructor() { }

  getMembers():Member[] {
    return Members;
  }

}
