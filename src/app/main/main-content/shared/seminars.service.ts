import { Seminars } from './mock/mock-seminar';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(private http:Http) { 
  }

  getSeminars() {
    // console.log(typeof(this.http.get('main/content/seminar').map(res => res.json())));
    // console.log(this.http.get('main/content/seminar').map(res => res.json()));
    // return Seminars;
    return this.http.get('main/content/seminar')
      .map(res => res.json());
  }

}
