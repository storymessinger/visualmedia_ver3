import { Medias } from './mock/mock-media';
import { Injectable } from '@angular/core';

export class Media {
    title: string;
    desc: string;
    img: string;
    date: string[];
    source: string;
    more: string;
}

@Injectable()
export class MediaService {

  constructor() { }

  getMedia():Media[] {
    return Medias;
  }

}
