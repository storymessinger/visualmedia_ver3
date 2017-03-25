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

  constructor(private publicationsService:PublicationsService) {
    this.getDatas= this.publicationsService.getPublications();
   }

  ngOnInit() {
  }

}

