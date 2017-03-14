import { PartnersService } from './../shared/partners.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.scss']
})
export class AboutPartnersComponent implements OnInit {

  public getDatas:any[];
  public datas:any;

  constructor(private partnersService:PartnersService) { 
    this.getDatas= this.partnersService.getPartners();
    this.datas = groupBy(this.getDatas, 'type');
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