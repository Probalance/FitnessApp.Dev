/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendgridService } from './sendgrid.service';

describe('Service: Sendgrid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendgridService]
    });
  });

  it('should ...', inject([SendgridService], (service: SendgridService) => {
    expect(service).toBeTruthy();
  }));
});
