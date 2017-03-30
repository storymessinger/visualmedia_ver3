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
  id: number;
  publicationItem: any;

  constructor(private publicationService: PublicationsService, private activatedRoute:ActivatedRoute) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.id = parseInt(param['id']);
        })
    this.publicationItem = this.publicationService.getPublicationsInt(this.id);
    this.publicationItem.authorArr = this.publicationItem.authors.split("+");
    
  }

  ngOnInit() {
  }

}
