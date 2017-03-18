/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScrollAbleService } from './scroll-able.service';

describe('ScrollAbleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollAbleService]
    });
  });

  it('should ...', inject([ScrollAbleService], (service: ScrollAbleService) => {
    expect(service).toBeTruthy();
  }));
});
