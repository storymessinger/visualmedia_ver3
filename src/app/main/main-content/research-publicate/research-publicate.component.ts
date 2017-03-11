import { PublicationsService } from './../shared/publications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-publicate',
  templateUrl: './research-publicate.component.html',
  styleUrls: ['./research-publicate.component.scss']
})
export class ResearchPublicateComponent implements OnInit {

  public publications:any;

  constructor(private publicationsService:PublicationsService) {
    this.publications = this.publicationsService.getPublications();
  }

  ngOnInit() {
  }

}
