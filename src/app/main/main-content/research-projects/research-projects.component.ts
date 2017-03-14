import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './../shared/projects.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-research-projects',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss']
})
export class ResearchProjectsComponent implements OnInit {

  private subscription: Subscription;

  getDatas:any[];
  datas:any;
  aYearDatas:any;
  id: string;

  page:number = 1;

  constructor(private projectsService:ProjectsService, private activatedRoute:ActivatedRoute) {
    this.getDatas= this.projectsService.getProjects();
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

}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}
