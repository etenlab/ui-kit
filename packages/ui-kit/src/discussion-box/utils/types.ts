export type ActionType<T> = {
  type: string;
  payload: T;
};

export interface IUser {
  user_id: string;
  kid: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  active: boolean;
  avatar_url?: string;
  is_email_verified: boolean;
  created_at: Date;
}

export interface IReaction {
  reaction_id: string;
  user_id: string;
  content: string;
  post_id: string;
  user: IUser;
}

export interface IFile {
  id: number;
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
  fileHash: string;
}

export interface IRelationshipPostFile {
  relationship_post_file_id: string;
  post_id: string;
  file: IFile;
}

export interface IPost {
  post_id: string;
  user_id: string;
  user: IUser;
  discussion_id: string;
  quill_text: string;
  plain_text: string;
  postgres_language: string;
  files: IRelationshipPostFile[];
  reactions: IReaction[];
  is_edited: boolean;
  reply_id?: string;
  reply?: IPost;
  created_at: Date;
}

export interface IDiscussion {
  discussion_id: string;
  table_name: string;
  row_id: string;
  posts: IPost[];
}

export type DiscussionRouteQuizParams = {
  table_name?: string;
  row_id?: string;
};

export interface SnackbarState {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
}

export interface EmojiPopoverState {
  anchorEl: Element | null;
  post: IPost | null;
  mode: 'quill' | 'react' | null;
}

export interface DiscussionCreatedData {
  discussionCreated: IDiscussion;
}

export interface PostCreatedData {
  postCreated: IPost;
}

export interface PostUpdatedData {
  postUpdated: IPost;
}

export interface PostDeletedData {
  postDeleted: string;
}

export interface ReactionCreatedData {
  reactionCreated: IReaction;
}

export interface ReactionDeletedData {
  reactionDeleted: string;
}

export interface UploadedFile {
  uploadFile: IFile;
}

export const FileMimeTypes = {
  Video: 'video',
  Audio: 'audio',
  Image: 'image',
};

export type FeedbackType = 'success' | 'error' | 'info' | 'warning';

export type EmojiModeType = 'quill' | 'react';

export type EditorKinds = 'quill' | 'audio' | 'video';

export type RecorderStatus = 'new' | 'paused' | 'recording' | 'ended';

export type ChangeDiscussionParams = {
  table_name: string;
  row_id: string;
};
