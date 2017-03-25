import { Members } from './mock/mock-member';
import { Injectable } from '@angular/core';

@Injectable()
export class MemberService {

  constructor() { }

  getMembers():any[] {
    return Members;
  }

}
