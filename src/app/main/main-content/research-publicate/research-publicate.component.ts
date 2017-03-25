import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../../shared/publications.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-research-publicate',
  templateUrl: './research-publicate.component.html',
  styleUrls: ['./research-publicate.component.scss']
})
export class ResearchPublicateComponent implements OnInit {

  private subscription: Subscription;

  getDatas:any[];
  datas:any;
  aYearDatas:any;
  id: string;

  constructor(private publicationsService:PublicationsService, private activatedRoute:ActivatedRoute) {
    this.getDatas= this.publicationsService.getPublications();
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
            // default year is 2017
            ( param['id'] !== undefined ) ? this.id = param['id'] : this.id = "2017";
            this.datas= groupBy(this.getDatas, 'year');
            this.aYearDatas= this.datas[this.id];
            console.log(this.aYearDatas);
        }
      )
   }

  ngOnInit() {
  }

}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}
