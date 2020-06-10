import { TestBed } from '@angular/core/testing';

import { DatagenServiceService } from './datagen-service.service';

describe('DatagenServiceService', () => {
  let service: DatagenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatagenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
