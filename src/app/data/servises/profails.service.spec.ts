import { TestBed } from '@angular/core/testing';

import { ProfailsService } from './profails.service';

describe('ProfailsService', () => {
  let service: ProfailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
