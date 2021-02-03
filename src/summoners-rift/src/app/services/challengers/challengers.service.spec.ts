import { TestBed } from '@angular/core/testing';

import { ChallengersService } from './challengers.service';

describe('ChallengersService', () => {
  let service: ChallengersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
