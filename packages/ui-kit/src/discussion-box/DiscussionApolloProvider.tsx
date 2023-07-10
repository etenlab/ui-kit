import React, { useMemo, ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';

import { getClient } from './graphql/client';

export interface DiscussionApolloProviderProps {
  httpUri: string;
  wsUri: string;
  children: ReactNode;
}

export function DiscussionApolloProvider(props: DiscussionApolloProviderProps) {
  const client = useMemo(() => {
    return getClient(props.httpUri, props.wsUri);
  }, [props.httpUri, props.wsUri]);

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
