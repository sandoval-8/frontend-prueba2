import { TestBed } from '@angular/core/testing';

import { ServiceAsideService } from './service-aside.service';

describe('ServiceAsideService', () => {
  let service: ServiceAsideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAsideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
