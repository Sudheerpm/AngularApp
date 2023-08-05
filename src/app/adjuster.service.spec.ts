import { TestBed } from '@angular/core/testing';

import { AdjusterService } from './adjuster.service';

describe('AdjusterService', () => {
  let service: AdjusterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdjusterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
