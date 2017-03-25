import { ResearchArea } from './mock/mock-researchArea';
import { Injectable } from '@angular/core';

@Injectable()
export class ResearchAreaService {

  constructor() { }

  getResearchArea():any {
    return ResearchArea;
  }

}
