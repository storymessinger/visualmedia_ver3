import { PublicationsService } from './../../../shared/publications.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-publicate-individual',
  templateUrl: './research-publicate-individual.component.html',
  styleUrls: ['./research-publicate-individual.component.scss']
})
export class ResearchPublicateIndividualComponent implements OnInit {

  subscription: Subscription;
  getDatas:any;
  datas:any;
  id: number;

  constructor(
    private publicationsService:PublicationsService, 
    private activatedRoute:ActivatedRoute
    ) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.id = parseInt(param['id']);
        })
  }

  ngOnInit() {
    this.getPublication(this.id);
  }

  getPublication(id:number=0) {
    this.publicationsService.getPublications()
     .subscribe(items => {
        // id
        this.datas = items.find( item => item.id === id );
      });
  }

}
