/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SWService } from './sw.service';

describe('SWService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SWService]
    });
  });

  it('should ...', inject([SWService], (service: SWService) => {
    expect(service).toBeTruthy();
  }));
});
