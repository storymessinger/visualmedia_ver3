import { Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { SeminarService } from '../../../shared/seminars.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-archive-seminar',
  templateUrl: './archive-seminar.component.html',
  styleUrls: ['./archive-seminar.component.scss']
})
export class ArchiveSeminarComponent implements OnInit {

  private subscription: Subscription;

  getDatas:any;
  datas:any;
  id: string;

  constructor(private seminarService:SeminarService) { 
  }

  ngOnInit() {
    this.getDatas = this.seminarService.getSeminars();
    this.datas = _.values(_.groupBy(this.getDatas,function(item){ return item["date"].split('.')[0] }))
      .reverse();
    
    //* use this later
    // this.seminarService.getSeminars()
    //  .subscribe(items => {
    //     this.getSeminars = items;
    //   });
    //* use this later
  }
}

