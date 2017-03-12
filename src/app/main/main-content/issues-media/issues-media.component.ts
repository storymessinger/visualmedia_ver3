import { Subscription } from 'rxjs/Rx';
import { Media, MediaService } from './../shared/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-media',
  templateUrl: './issues-media.component.html',
  styleUrls: ['./issues-media.component.scss']
})
export class IssuesMediaComponent implements OnInit {

  private subscription: Subscription;

  getDatas:Media[];
  datas:any;
  aYearDatas:any;
  id: string;

  constructor(private mediaService:MediaService) {
    // this.getDatas= this.downloadService.getIssues();
    // this.subscription = activatedRoute.params //
    //   .subscribe(
    //     (param:any) => {
    //         // default year is 2017
    //         ( param['id'] !== undefined ) ? this.id = param['id'] : this.id = "2017";
    //         this.datas= groupBy(this.getDatas, 'year');
    //         this.aYearDatas= this.datas[this.id];
    //     }
    //   )
   }

  ngOnInit() {
  }

}
