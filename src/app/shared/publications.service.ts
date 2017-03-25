import { Publications } from './mock/mock-publications';
import { Injectable } from '@angular/core';

@Injectable()
export class PublicationsService {

  datasByYear:any;
  aYearDatas:any;
  id: any;

  constructor() { 
    this.datasByYear = groupBy(Publications, 'year');

  }

  getPublications(id:number= 0):any {
    if (id == 0) {
      return Publications;
    } else {
      // return this.datasById[id][0];
      return Publications.find( item => item.id === id);
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
