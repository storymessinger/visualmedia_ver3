import { ProjectsService } from '../../../shared/projects.service';
import { Component, OnInit } from '@angular/core';

import * as _ from 'underscore';

@Component({
  selector: 'app-research-projects',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss']
})
export class ResearchProjectsComponent implements OnInit {


  getDatas:any[];
  datas:any;
  id: string;

  page:number = 1;

  constructor(private projectsService:ProjectsService) {
    this.getDatas= this.projectsService.getProjects();
    this.datas = _.values(_.groupBy(this.getDatas,"year"))
      .reverse();
   }

  ngOnInit() {
  }
}