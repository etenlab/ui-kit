import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend input DiscussionInput {
    row_id: String!
    table_name: String!
  }

  extend input NewPostInput {
    discussion_id: String!
    plain_text: String!
    postgres_language: String! = "simple"
    quill_text: String!
    reply_id: String
    user_id: String!
  }

  extend input NewReactionInput {
    content: String!
    post_id: String!
    user_id: String!
  }

  extend input NewUserInput {
    avatar_url: String
    email: String!
    first_name: String!
    kid: String!
    last_name: String!
    username: String!
  }
`;

export const USER_FIELDS = gql`
  fragment UserFields on User {
    active
    avatar_url
    created_at
    email
    first_name
    is_email_verified
    kid
    last_name
    user_id
    username
  }
`;

export const REACTION_FIELDS = gql`
  ${USER_FIELDS}
  fragment ReactionFields on Reaction {
    post_id
    reaction_id
    user_id
    content
    user {
      ...UserFields
    }
  }
`;

export const FILE_FIELDS = gql`
  fragment FileFields on File {
    fileHash
    fileName
    fileSize
    fileType
    fileUrl
    id
  }
`;

export const RELATIONSHIP_POST_FILE_FILEDS = gql`
  ${FILE_FIELDS}
  fragment RelationshipPostFileFields on RelationshipPostFile {
    post_id
    relationship_post_file_id
    file {
      ...FileFields
    }
  }
`;

export const POST_FIELDS = gql`
  ${RELATIONSHIP_POST_FILE_FILEDS}
  ${REACTION_FIELDS}
  ${USER_FIELDS}
  fragment PostFields on Post {
    created_at
    discussion_id
    is_edited
    plain_text
    post_id
    postgres_language
    quill_text
    reply_id
    user_id
    files {
      ...RelationshipPostFileFields
    }
    reactions {
      ...ReactionFields
    }
    user {
      ...UserFields
    }
  }
`;

export const DISCUSSION_FIELDS = gql`
  ${POST_FIELDS}
  fragment DiscussionFields on Discussion {
    discussion_id
    row_id
    table_name
    posts {
      reply {
        ...PostFields
      }
      ...PostFields
    }
  }
`;

export const DISCUSSION_SUMMARY_FIELDS = gql`
  fragment DiscussionSummaryFields on DiscussionSummary {
    discussion_id
    row_id
    table_name
    total_posts
  }
`;

export const GET_DISCUSSIONS = gql`
  ${DISCUSSION_FIELDS}
  query GetDiscussions($row_id: String!, $table_name: String!) {
    discussions(row: $row_id, table_name: $table_name) {
      ...DiscussionFields
    }
  }
`;

export const CREATE_DISCUSSION = gql`
  ${DISCUSSION_FIELDS}
  mutation CreateDiscussion($discussion: DiscussionInput!) {
    createDiscussion(newDiscussionData: $discussion) {
      ...DiscussionFields
    }
  }
`;

export const DELETE_DISCUSSION = gql`
  mutation DeleteDiscussion($id: String!) {
    deleteDiscussion(id: $id)
  }
`;

export const GET_POSTS_BY_DISCUSSION_ID = gql`
  ${POST_FIELDS}
  query GetPosts($discussionId: String!) {
    postsByDiscussionId(discussionId: $discussionId) {
      ...PostFields
    }
  }
`;

export const CREATE_POST = gql`
  ${POST_FIELDS}
  mutation CreatePost($post: NewPostInput!, $files: [Int]!) {
    createPost(newPostData: $post, files: $files) {
      ...PostFields
    }
  }
`;

export const UPDATE_POST = gql`
  ${POST_FIELDS}
  mutation UpdatePost($post: NewPostInput!, $id: String!) {
    updatePost(data: $post, id: $id) {
      ...PostFields
    }
  }
`;

export const DELETE_ATTACHMENT = gql`
  mutation DeleteAttachment($attachmentId: String!, $post_id: String!) {
    deleteAttachment(attachmentId: $attachmentId, post_id: $post_id)
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: String!, $userId: String!) {
    deletePost(id: $id, userId: $userId)
  }
`;

export const DELETE_POSTS_BY_DISCUSSION_ID = gql`
  mutation DeletePostsByDiscussionId($discussionId: String!) {
    deletePostsByDiscussionId(discussionId: $discussionId)
  }
`;

export const GET_REACTION_BY_POST_ID = gql`
  ${REACTION_FIELDS}
  query GetReactionsByPostId($postId: String!) {
    reactionsByPostId(postId: $postId) {
      ...ReactionFields
    }
  }
`;

export const CREATE_REACTION = gql`
  ${REACTION_FIELDS}
  mutation CreateReaction($reaction: NewReactionInput!) {
    createReaction(newReactionData: $reaction) {
      ...ReactionFields
    }
  }
`;

export const DELETE_REACTION = gql`
  mutation DeleteReaction($id: String!, $userId: String!) {
    deleteReaction(id: $id, userId: $userId)
  }
`;

export const CREATE_USER = gql`
  ${USER_FIELDS}
  mutation CreateUser($newUserData: NewUserInput!) {
    createUser(newUserData: $newUserData) {
      ...UserFields
    }
  }
`;

export const GET_USER_ID_FROM_EMAIL = gql`
  ${USER_FIELDS}
  query GetUserIdFromEmail($email: String!) {
    getUserIdFromEmail(email: $email) {
      ...UserFields
    }
  }
`;

export const GET_USER_ID_FROM_NAME = gql`
  ${USER_FIELDS}
  query GetUserIdFromName($name: String!) {
    getUserIdFromName(name: $name) {
      ...UserFields
    }
  }
`;

export const GET_DISCUSSIONS_SUMMARY_BY_USER_ID = gql`
  ${DISCUSSION_SUMMARY_FIELDS}
  query GetDiscussionsSummaryByUserId($userId: String!) {
    getDiscussionsSummaryByUserId(userId: $userId) {
      ...DiscussionSummaryFields
    }
  }
`;
