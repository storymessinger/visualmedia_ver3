import { Project, ProjectsService } from './../shared/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-projects',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss']
})
export class ResearchProjectsComponent implements OnInit {

  public projects:Project[];
  page:number = 1;

  constructor(private projectsService:ProjectsService) {
    this.projects = this.projectsService.getProjects();
   }

  ngOnInit() {
  }

}
