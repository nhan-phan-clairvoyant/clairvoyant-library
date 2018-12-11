import { TestBed } from '@angular/core/testing';

import { CvLibraryService } from './cv-library.service';

describe('CvLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvLibraryService = TestBed.get(CvLibraryService);
    expect(service).toBeTruthy();
  });
});
