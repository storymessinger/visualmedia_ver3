import { News } from './mock/mock-news';
import { Injectable } from '@angular/core';

export class New {
    title: string;
    desc: string;
    img: string;
    date: string[];
}

@Injectable()
export class NewsService {

  constructor() { }

  getNews():New[] {
    return News;
  }

}
