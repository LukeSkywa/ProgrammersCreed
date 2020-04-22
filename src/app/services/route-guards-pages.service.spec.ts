import { TestBed } from '@angular/core/testing';

import { RouteGuardsPagesService } from './route-guards-pages.service';

describe('RouteGuardsPagesService', () => {
  let service: RouteGuardsPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardsPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
