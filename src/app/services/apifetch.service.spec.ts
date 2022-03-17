import { TestBed } from '@angular/core/testing';

import { ApifetchService } from './apifetch.service';

describe('ApifetchService', () => {
  let service: ApifetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
