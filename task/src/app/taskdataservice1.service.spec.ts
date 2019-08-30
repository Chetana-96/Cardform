import { TestBed } from '@angular/core/testing';

import { Taskdataservice1Service } from './taskdataservice1.service';

describe('Taskdataservice1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Taskdataservice1Service = TestBed.get(Taskdataservice1Service);
    expect(service).toBeTruthy();
  });
});
