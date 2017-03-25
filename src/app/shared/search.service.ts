import { SeminarService } from './seminars.service';
import { PublicationsService } from './publications.service';
import { ProjectsService } from './projects.service';
import { MemberService } from './member.service';
import { DownloadService } from './downloads.service';
import { IssuesService } from './Issues.service';
import { Injectable } from '@angular/core';

// import { Fuse } from 'fuse.js';

@Injectable()
export class SearchService {

  public allInfo:any[];
  private options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "title",
        "name"
    ]
  } 

  constructor(
    private downloads:DownloadService, 
    private issues:IssuesService, 
    private members:MemberService, 
    private projects:ProjectsService, 
    private publications:PublicationsService,
    private seminars:SeminarService) { 
      const d = downloads.getDownloads();
      const i = issues.getIssues();
      const m = members.getMembers();

      this.allInfo = [ ...d, ...i, ...m];
    }

    startSearch(query) {
      // var fuse = new Fuse(this.allInfo, this.options); // "list" is the item array
      // var result = fuse.search(query);
      // return result;
    }

}
