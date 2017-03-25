import { Publications } from './mock/mock-publications';
import { Injectable } from '@angular/core';

@Injectable()
export class PublicationsService {

  constructor() { }

  getPublications():any {
    return Publications;
  }

}
