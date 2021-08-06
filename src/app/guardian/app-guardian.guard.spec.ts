import { TestBed } from '@angular/core/testing';

import { AppGuardianGuard } from './app-guardian.guard';

describe('AppGuardianGuard', () => {
  let guard: AppGuardianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppGuardianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
