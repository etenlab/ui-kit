import React, { useEffect, useRef, useCallback } from 'react';

import { Post } from './Post';
import { ScrollDownButton } from '../../button';

import { Stack } from '@mui/material';

import { useDiscussionContext } from '../hooks/useDiscussionContext';

export function PostList() {
  const {
    states: { discussion },
  } = useDiscussionContext();
  const ref = useRef<HTMLDivElement>(null);

  const moveScrollDown = useCallback(() => {
    const element = ref.current;
    element?.scrollTo(0, element.scrollHeight);
  }, []);

  useEffect(() => {
    moveScrollDown();
  }, [moveScrollDown]);

  const postListDom = ref.current;

  let isShownDownButton = false;

  if (postListDom) {
    isShownDownButton = postListDom.scrollHeight > postListDom.offsetHeight;
  }

  return (
    <Stack
      gap="10px"
      ref={ref}
      sx={{
        position: 'relative',
        flexGrow: 1,
        overflowY: 'auto',
        padding: '20px',
      }}
    >
      {discussion
        ? discussion.posts.map((post) => <Post post={post} key={post.id} />)
        : null}
      {isShownDownButton ? <ScrollDownButton onClick={moveScrollDown} /> : null}
    </Stack>
  );
}
