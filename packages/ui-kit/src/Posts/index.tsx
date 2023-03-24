import React from 'react';

import { Post } from 'node-type';
import { Box } from '@mui/material';
import { IoChatboxOutline } from '../icons';

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        opacity: '0.5',
        marginRight: '10px',
        minWidth: '32px',
      }}
    >
      <IoChatboxOutline />
      {posts.length}
    </Box>
  );
}
