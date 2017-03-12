import { Issues } from './mock/mock-issues';
import { Injectable } from '@angular/core';

export class Media {
    title: string;
    desc: string;
    img: string;
    date: string[];
    source: string;
    sourceLink: string;
}
export class New {
    title: string;
    desc: string;
    img: string;
    date: string[];
}

@Injectable()
export class IssuesService {

  constructor() { }

  getIssues(arg) {
      if ( arg == "media") {
          
      } else if ( arg == "news") {

      }
  }
}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}

