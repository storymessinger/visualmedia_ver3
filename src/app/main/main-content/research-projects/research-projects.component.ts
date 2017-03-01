import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-projects',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss']
})
export class ResearchProjectsComponent implements OnInit {

  page:number = 1;

  constructor() { }

  ngOnInit() {
  }

}
