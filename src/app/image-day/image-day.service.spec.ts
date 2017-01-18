/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImageDayService } from './image-day.service';

describe('ImageDayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageDayService]
    });
  });

  it('should ...', inject([ImageDayService], (service: ImageDayService) => {
    expect(service).toBeTruthy();
  }));
});
