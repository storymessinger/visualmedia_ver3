import { Projects } from './mock/mock-projects';
import { Injectable } from '@angular/core';

export interface Project {
    projectsId:number;
    type:string;
    name:string;
    fullname:string;
    partners:string;
    team:string;
    funding:any;
    manager:any;
    status:string;
    date:string;
}

@Injectable()
export class ProjectsService {

  constructor() { }

  getProjects():Project[] {
    return Projects;
  }

}
