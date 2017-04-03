// import { Seminars } from './mock/mock-seminar';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SeminarService {


  constructor(private http:Http) { 
  }

  getSeminars() {

    return this.http.get('main/seminar')
      .map(res => res.json());

    // return Seminars;
  }

}
