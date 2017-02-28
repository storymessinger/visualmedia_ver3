import { Media, MediaService } from './../shared/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-media',
  templateUrl: './issues-media.component.html',
  styleUrls: ['./issues-media.component.scss']
})
export class IssuesMediaComponent implements OnInit {

  public medias:Media[];

  constructor(private mediaService:MediaService) {
    this.medias = mediaService.getMedia();
   }

  ngOnInit() {
  }

}
