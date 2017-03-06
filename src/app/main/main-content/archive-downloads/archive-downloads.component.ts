import { Download, DownloadService } from './../shared/downloads.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-downloads',
  templateUrl: './archive-downloads.component.html',
  styleUrls: ['./archive-downloads.component.scss']
})
export class ArchiveDownloadsComponent implements OnInit {

  public downloads:Download[];

  constructor(private downloadService:DownloadService) { 
    this.downloads = this.downloadService.getDownloads();
  }


  ngOnInit() {
  }

}
