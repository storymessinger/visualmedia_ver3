import { Router, ActivatedRoute } from '@angular/router';
import { Seminar, SeminarService } from './../shared/seminars.service';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-archive-seminar',
  templateUrl: './archive-seminar.component.html',
  styleUrls: ['./archive-seminar.component.scss']
})
export class ArchiveSeminarComponent implements OnInit, DoCheck, OnDestroy {

  private subscription: Subscription;

  getSeminars:any = [];
  seminars:any;
  aYearSeminars:any;
  id: string;

  constructor(private seminarService:SeminarService, public activatedRoute:ActivatedRoute) { 
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.seminarService.getSeminars()
     .subscribe(items => {
        this.getSeminars = items;
      });
  }

  ngDoCheck() {
    this.subscription = this.activatedRoute.params // url로 주어지는 값
      .subscribe(
          (param: any) => {
            // default year is 2017
            ( param['id'] !== undefined ) ? this.id = param['id'] : this.id = "2017";
            this.seminars = groupBy(this.getSeminars, 'year');
            this.aYearSeminars = this.seminars[this.id];
            console.log('check');
            console.log(this.getSeminars);
            console.log(this.aYearSeminars);
          }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}
