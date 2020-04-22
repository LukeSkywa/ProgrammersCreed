import { TestBed } from '@angular/core/testing';

import { RouteGuardsLoginRegisterService } from './route-guards-login-register.service';

describe('RouteGuardsLoginRegisterService', () => {
  let service: RouteGuardsLoginRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardsLoginRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
