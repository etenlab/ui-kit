import React from 'react';

import { Stack } from '@mui/material';

import { Attachment } from '../Attachment';

import { IFile } from '../utils/types';

type QuillAttachmentListProps = {
  attachments: IFile[];
  onCancel: (attachment: IFile) => void;
};

export function QuillAttachmentList({
  attachments,
  onCancel,
}: QuillAttachmentListProps) {
  return (
    <Stack gap={2} direction="row" sx={{ display: 'inline-flex' }}>
      {attachments.map((attachment) => (
        <Attachment
          key={attachment.id}
          file={attachment}
          mode="quill"
          onRemove={() => {
            onCancel(attachment);
          }}
        />
      ))}
    </Stack>
  );
}
