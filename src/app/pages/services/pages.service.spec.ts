import { TestBed } from '@angular/core/testing';

import { PagesService } from './pages.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PagesService', () => {
  let service: PagesService;
  httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagesService]
    });
    service = TestBed.inject(PagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should make data  from server response', () => {

  });
});
