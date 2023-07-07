import {
  split,
  HttpLink,
  ApolloClient,
  InMemoryCache,
  from,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { onError } from '@apollo/client/link/error';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_DISCUSSION_SUBSCRIPTION_API,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.REACT_APP_DISCUSSION_SUBSCRIPTION_WS_API!,
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

export const discussionSubscriptionClient = new ApolloClient({
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
});
