import { TestBed, inject } from '@angular/core/testing';

import { RandomImageService } from './random-image.service';

describe('RandomImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomImageService]
    });
  });

  it('should be created', inject([RandomImageService], (service: RandomImageService) => {
    expect(service).toBeTruthy();
  }));
});
