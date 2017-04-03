import { Issues } from './mock/mock-issues';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as _ from 'underscore';


@Injectable()
export class IssuesService {

  constructor(private http:Http) { 
  }

  getIssues() {
    return this.http.get('main/news')
      .map(res => res.json())
  }
}


