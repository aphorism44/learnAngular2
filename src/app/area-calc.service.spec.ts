import { TestBed, inject } from '@angular/core/testing';

import { AreaCalcService } from './area-calc.service';

describe('AreaCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreaCalcService]
    });
  });

  it('should be created', inject([AreaCalcService], (service: AreaCalcService) => {
    expect(service).toBeTruthy();
  }));
});
