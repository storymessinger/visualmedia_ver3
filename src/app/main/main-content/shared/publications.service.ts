import { Publications } from './mock/mock-publications';
import { Injectable } from '@angular/core';

export interface Publication {
    "publicationId": number;
    "type": string;
    "title": string;
    "authors": string;
    "conference": string;
    "journal": string;
    "thesisInfo": string;
    "paper": string;
    "projectPage": string;
    "team": string;

}

@Injectable()
export class PublicationsService {

  constructor() { }

  getPublications():Publication[] {
    return Publications;
  }

}
