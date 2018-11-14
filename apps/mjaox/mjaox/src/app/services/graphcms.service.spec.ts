import { TestBed } from '@angular/core/testing';

import { GraphCMSService } from './graphcms.service';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';
import { Apollo } from 'apollo-angular';

describe('GraphCMSService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Apollo,
          use: jest.fn()
        }
      ]
    });

  });

  it('should be created', () => {
    const service: GraphCMSService = TestBed.get(GraphCMSService);
    expect(service).toBeTruthy();
  });
});
