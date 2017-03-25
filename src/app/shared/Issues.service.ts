import { Issues } from './mock/mock-issues';
import { Injectable } from '@angular/core';


@Injectable()
export class IssuesService {

  public groupedIssues = groupBy(Issues, 'type');

  constructor() { 

  }

  getIssues() {
    return Issues;
  }

  getNews() {
    return this.groupedIssues['news'];
  }

  getMedia() {
    return this.groupedIssues['media'];

  }
}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}

