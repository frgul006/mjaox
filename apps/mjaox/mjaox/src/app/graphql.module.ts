import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZTEyNWEyM2ItYjgzNC00NWM5LTg1ZDYtZjQ0MDJlNWE0MGY2In0.5SeWdf8TVNF9pTdI6B_EfEHN65V5Qd57oxFqVNI6ugA';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const uri =
  'https://api-euwest.graphcms.com/v1/cjog4khvf00ab01g57et4re7d/master';

// <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  return {
    link: authLink.concat(httpLink.create({ uri })),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
