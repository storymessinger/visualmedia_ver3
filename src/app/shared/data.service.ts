import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getMembers():any {
    return this.http.get('main/all-data')
      .map(res => res.json())
  }

  getDownloads ():any {
    return this.http.get('main/downloads-data')
      .map(res => res.json());
  }

  getSeminars() {

    return this.http.get('main/seminar')
      .map(res => res.json());
  }

  getIssues() {
    return this.http.get('main/news')
      .map(res => res.json())
  }

  getPublications():any {
    return this.http.get('main/publicate-data')
      .map(res => res.json())
  }

  getProjects():any {

  }

  getResearchArea(team = null):any {
    if (team == null) {
      // return ResearchArea;
    } else {
      // return ResearchArea.find( item => item.team === team);
    }
  }


}
