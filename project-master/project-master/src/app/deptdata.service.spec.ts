import { TestBed } from '@angular/core/testing';

import { DeptdataService } from './deptdata.service';

describe('DeptdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeptdataService = TestBed.get(DeptdataService);
    expect(service).toBeTruthy();
  });
});
