import { SeminarService } from './seminars.service';
import { PublicationsService } from './publications.service';
import { ProjectsService } from './projects.service';
import { MemberService } from './member.service';
import { DownloadService } from './downloads.service';
import { IssuesService } from './Issues.service';
import { Injectable } from '@angular/core';

import * as Fuse from 'fuse.js'

@Injectable()
export class SearchService {

  public allInfo:any[];
  private options = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "title",
        "name",
        "desc"
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
      const p_int = publications.getPublicationsInt();
      const p_kr = publications.getPublicationsKr();
      const p_thesis = publications.getThesis();
      const s = seminars.getSeminars();

      this.allInfo = [ ...d, ...i, ...m, ...p_int, ...p_kr, ...p_thesis, ...s ];
    }

    getSearch(query) {
      var fuse = new Fuse(this.allInfo, this.options); // "list" is the item array
      var result = fuse.search(query);
      return result;
    }

}
