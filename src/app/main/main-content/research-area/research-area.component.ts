import { ResearchAreaService } from '../../../shared/researchArea.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-area',
  templateUrl: './research-area.component.html',
  styleUrls: ['./research-area.component.scss']
})
export class ResearchAreaComponent implements OnInit {

  constructor(private researchAreaService:ResearchAreaService) { }

  public areas:any;

  ngOnInit() {
    this.areas = this.researchAreaService.getResearchArea();
  }

}
