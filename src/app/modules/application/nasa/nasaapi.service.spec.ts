import { TestBed } from '@angular/core/testing';

import { NasaapiService } from './nasaapi.service';

describe('NasaapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaapiService = TestBed.get(NasaapiService);
    expect(service).toBeTruthy();
  });
});
