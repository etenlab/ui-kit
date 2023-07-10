import React from 'react';

import { DiscussionApolloProvider } from './DiscussionApolloProvider';
import { DiscussionProvider } from './context';

import { DiscussionPure, DiscussionPureProps } from './DiscussionPure';

export interface DiscussionProps extends DiscussionPureProps {
  httpUri: string;
  wsUri: string;
}

export function Discussion(props: DiscussionProps) {
  return (
    <DiscussionApolloProvider httpUri={props.httpUri} wsUri={props.wsUri}>
      <DiscussionProvider>
        <DiscussionPure {...props} />
      </DiscussionProvider>
    </DiscussionApolloProvider>
  );
}
