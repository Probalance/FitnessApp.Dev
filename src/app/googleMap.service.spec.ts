/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleMapService } from './googleMap.service';

describe('Service: Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleMapService]
    });
  });

  it('should ...', inject([GoogleMapService], (service: GoogleMapService) => {
    expect(service).toBeTruthy();
  }));
});
