import { Members } from './mock/mock-member';
import { Injectable } from '@angular/core';

export class Member {
    img: string;
    name: string;
    status: string;
    topics: string[];
    email: string
}

@Injectable()
export class MemberService {

  constructor() { }

  getMembers():Member[] {
    return Members;
  }

}
