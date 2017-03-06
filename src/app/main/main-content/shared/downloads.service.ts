import { Downloads } from './mock/mock-downloads';
import { Injectable } from '@angular/core';

export interface Download {
    downloadId: number;
    type: string;
    year: number;
    title: string;
    desc: string;
    link: string;
    linkPage?: string;
}

@Injectable()
export class DownloadService {

  constructor() { }

  getDownloads ():Download[] {
    return Downloads;
  }

}
