import { TestBed } from '@angular/core/testing';

import { EnrolledcourseService } from './enrolledcourse.service';

describe('EnrolledcourseService', () => {
  let service: EnrolledcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolledcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
