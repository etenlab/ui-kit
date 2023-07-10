import { split, ApolloClient, InMemoryCache, from } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { onError } from '@apollo/client/link/error';
import { createClient } from 'graphql-ws';
import { createUploadLink } from 'apollo-upload-client';

import { typeDefs } from './discussionQuery';

const _cache = new Map<string, ApolloClient<unknown>>();

// eslint-disable-next-line import/no-anonymous-default-export
export function getClient(
  httpUri: string,
  wsUri: string,
): ApolloClient<unknown> {
  const cached = _cache.get(httpUri + wsUri);

  if (!cached) {
    const httpLink = createUploadLink({
      uri: httpUri,
    });

    const wsLink = new GraphQLWsLink(
      createClient({
        url: wsUri,
      }),
    );

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink,
    );

    const client = new ApolloClient({
      link: from([errorLink, splitLink]),
      cache: new InMemoryCache(),

      // Provide some optional constructor fields
      name: 'react-web-client',
      version: '1.3',
      queryDeduplication: false,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
      },
      typeDefs,
    });
    _cache.set(httpUri + wsUri, client);

    return client;
  } else {
    return cached;
  }
}
