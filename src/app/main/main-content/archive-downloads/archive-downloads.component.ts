import { DownloadService } from '../../../shared/downloads.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-archive-downloads',
  templateUrl: './archive-downloads.component.html',
  styleUrls: ['./archive-downloads.component.scss']
})
export class ArchiveDownloadsComponent implements OnInit {


  getDatas:any;
  datas:any;
  id: string;

  constructor(private downloadService:DownloadService) { 
    this.getDatas= this.downloadService.getDownloads();
    this.datas = _.values(_.groupBy(this.getDatas,"year"))
      .reverse();
  }

  ngOnInit() {
  }

}

