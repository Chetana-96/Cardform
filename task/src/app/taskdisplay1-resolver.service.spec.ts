import { TestBed } from '@angular/core/testing';

import { Taskdisplay1ResolverService } from './taskdisplay1-resolver.service';

describe('Taskdisplay1ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Taskdisplay1ResolverService = TestBed.get(Taskdisplay1ResolverService);
    expect(service).toBeTruthy();
  });
});
