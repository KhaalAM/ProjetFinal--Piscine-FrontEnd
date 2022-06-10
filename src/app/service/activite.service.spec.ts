import { TestBed } from '@angular/core/testing';

import { ActivitesService } from './activite.service';

describe('ActivitesService', () => {
  let service: ActivitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
