import { TestBed } from '@angular/core/testing';

import { Textdavinci001Service } from './textdavinci001.service';

describe('Textdavinci001Service', () => {
  let service: Textdavinci001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Textdavinci001Service);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
