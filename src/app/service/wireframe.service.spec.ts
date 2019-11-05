import { TestBed } from '@angular/core/testing';

import { WireframeService } from './wireframe.service';

describe('WireframeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WireframeService = TestBed.get(WireframeService);
    expect(service).toBeTruthy();
  });
});
