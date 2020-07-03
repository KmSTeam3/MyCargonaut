import { TestBed } from '@angular/core/testing';

import { DataHelperService } from './data-helper.service';

describe('DataHelperService', () => {
  let service: DataHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
