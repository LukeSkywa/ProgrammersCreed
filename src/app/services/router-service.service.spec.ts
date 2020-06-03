import { TestBed } from '@angular/core/testing';

import { RouterServiceService } from './router-service.service';

describe('RouterServiceService', () => {
  let service: RouterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
