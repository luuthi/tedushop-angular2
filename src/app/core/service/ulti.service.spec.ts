import { TestBed, inject } from '@angular/core/testing';

import { UltiService } from './ulti.service';

describe('UltiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UltiService]
    });
  });

  it('should be created', inject([UltiService], (service: UltiService) => {
    expect(service).toBeTruthy();
  }));
});
