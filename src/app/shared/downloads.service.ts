// import { Downloads } from './mock/mock-downloads';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DownloadService {


  constructor(private http:Http) { 
  }

  getDownloads ():any {
    return this.http.get('main/downloads-data')
      .map(res => res.json());

    // return Downloads;
  }

}
