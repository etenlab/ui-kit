import React from 'react';

import { Stack } from '@mui/material';

import { Attachment } from '../Attachment';

import { IPost, IRelationshipPostFile } from '../utils/types';

import { useDiscussionContext } from '../hooks/useDiscussionContext';

type AttachmentListProps = {
  files: IRelationshipPostFile[];
  post: IPost;
};

export function AttachmentList({ files, post }: AttachmentListProps) {
  const {
    states: {
      global: { user },
    },
    actions: { deleteAttachment, alertFeedback },
  } = useDiscussionContext();

  const removeAttachmentById = (id: string) => {
    if (post.user_id !== user?.user_id) {
      alertFeedback('warning', 'You are not owner of this post');
      return;
    }
    if (
      post.quill_text === '' &&
      post.plain_text === '' &&
      post.files.length === 1
    ) {
      const result = window.confirm('Are you sure to delete this post?');
      if (!result) {
        return;
      }
    }

    deleteAttachment({
      variables: {
        attachmentId: id,
        post_id: post.post_id,
      },
    });
  };

  return (
    <Stack gap={2} alignItems="flex-start">
      {files.map((file) => (
        <Attachment
          key={file.relationship_post_file_id}
          file={file.file}
          mode="view"
          onRemove={() => {
            removeAttachmentById(file.relationship_post_file_id);
          }}
        />
      ))}
    </Stack>
  );
}
