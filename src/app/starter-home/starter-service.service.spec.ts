import { TestBed } from '@angular/core/testing';

import { StarterServiceService } from './starter-service.service';

describe('StarterServiceService', () => {
  let service: StarterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
