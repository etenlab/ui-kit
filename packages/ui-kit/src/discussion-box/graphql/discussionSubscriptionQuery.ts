import { gql } from '@apollo/client';

import {
  DISCUSSION_FIELDS,
  POST_FIELDS,
  REACTION_FIELDS,
} from './discussionQuery';

export const DISCUSSION_CREAETD_SUBSCRIPTION = gql`
  ${DISCUSSION_FIELDS}
  subscription OnDiscussionCreated($table_name: String!, $row_id: String!) {
    discussionCreated(table_name: $table_name, row_id: $row_id) {
      ...DiscussionFields
    }
  }
`;

export const POST_CREATED_SUBSCRIPTION = gql`
  ${POST_FIELDS}
  subscription OnPostCreated($discussionId: String!) {
    postCreated(discussionId: $discussionId) {
      ...PostFields
    }
  }
`;

export const POST_UPDATED_SUBSCRIPTION = gql`
  ${POST_FIELDS}
  subscription OnPostUpdate($discussionId: String!) {
    postUpdated(discussionId: $discussionId) {
      ...PostFields
    }
  }
`;

export const POST_DELETED_SUBSCRIPTION = gql`
  subscription OnPostDeleted($discussionId: String!) {
    postDeleted(discussionId: $discussionId)
  }
`;

export const REACTION_CREATED_SUBSCRIPTION = gql`
  ${REACTION_FIELDS}
  subscription OnReactionCreated($discussionId: String!) {
    reactionCreated(discussionId: $discussionId) {
      ...ReactionFields
    }
  }
`;

export const REACTION_DELETED_SUBSCRIPTION = gql`
  subscription OnReactionDeleted($discussionId: String!) {
    reactionDeleted(discussionId: $discussionId)
  }
`;
