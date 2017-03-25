import { ActivatedRoute } from '@angular/router';
import { DownloadService } from '../../../shared/downloads.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-archive-downloads',
  templateUrl: './archive-downloads.component.html',
  styleUrls: ['./archive-downloads.component.scss']
})
export class ArchiveDownloadsComponent implements OnInit {

  private subscription: Subscription;

  getDatas:any;
  datas:any;
  aYearDatas:any;
  id: string;

  constructor(private downloadService:DownloadService, private activatedRoute:ActivatedRoute) { 
    this.getDatas= this.downloadService.getDownloads();
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
            // default year is 2017
            ( param['id'] !== undefined ) ? this.id = param['id'] : this.id = "2017";
            this.datas= groupBy(this.getDatas, 'year');
            this.aYearDatas= this.datas[this.id];
        }
      )
  }

  ngOnInit() {
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

