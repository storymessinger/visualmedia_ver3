import { Seminars } from './mock/mock-seminar';
import { Injectable } from '@angular/core';

export interface Seminar {
    seminarId: number;
    year?: number;
    date: string;
    title: string;
    presenter: string;
    type: string;
    link: string;
}

@Injectable()
export class SeminarService {

  constructor() { }

  getSeminars():Seminar[] {
    return Seminars;
  }

}
