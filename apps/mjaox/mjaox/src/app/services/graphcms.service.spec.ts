import { TestBed } from '@angular/core/testing';

import { GraphCMSService } from './graphcms.service';

describe('GraphCMSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphCMSService = TestBed.get(GraphCMSService);
    expect(service).toBeTruthy();
  });
});
