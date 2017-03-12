import { Router, ActivatedRoute } from '@angular/router';
import { Seminar, SeminarService } from './../shared/seminars.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-archive-seminar',
  templateUrl: './archive-seminar.component.html',
  styleUrls: ['./archive-seminar.component.scss']
})
export class ArchiveSeminarComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  getSeminars:any = [];
  seminars:any;
  aYearSeminars:any;
  id: string;

  constructor(private seminarService:SeminarService, public activatedRoute:ActivatedRoute) { 
    // this.getSeminars = this.seminarService.getSeminars();
    this.subscription = this.activatedRoute.params // url로 주어지는 값
      .subscribe(
          (param: any) => {
            // default year is 2017
            ( param['id'] !== undefined ) ? this.id = param['id'] : this.id = "2017";
            this.seminars = groupBy(this.getSeminars, 'year');
            this.aYearSeminars = this.seminars[this.id];
          }
      );
  }

  ngOnInit() {
        // Retrieve posts from the API
    this.seminarService.getSeminars()
     .subscribe(items => {
        this.getSeminars = items;
      });
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
