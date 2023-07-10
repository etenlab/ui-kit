import React, { useState, useRef, useLayoutEffect } from 'react';

import { Stack, Popover, Typography } from '@mui/material';

import { DiReply, DiEdit, DiRemove } from '../../icons';

import { useColorModeContext } from '../../ThemeProvider';

import { PostHeader } from '../PostHeader';
import { ReplyDecorator } from '../ReplyDecorator';
import { ActionList } from '../ActionList';

import { ReactionList } from '../ReactionList';
import { AttachmentList } from '../AttachmentList';

import { useDiscussionContext } from '../hooks/useDiscussionContext';
import { IPost } from '../utils/types';

interface PostProps {
  post: IPost;
}

/**
 * This component basically renders Post, ReactionList.
 */
export function Post({ post }: PostProps) {
  const { getColor } = useColorModeContext();
  const {
    post_id,
    user,
    quill_text,
    created_at,
    reactions,
    files,
    reply_id,
    reply,
    is_edited,
  } = post;

  const {
    states: {
      global: { user: globalUser },
      quillRef,
    },
    actions: {
      deletePost,
      setPostForEditing,
      setPostForReplying,
      alertFeedback,
      changeEditorKind,
    },
  } = useDiscussionContext();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const postElement = useRef<HTMLParagraphElement>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useLayoutEffect(() => {
    if (postElement.current) {
      postElement.current.innerHTML =
        quill_text +
        (is_edited ? "<span style='font-size: 12px'>(edited)</span>" : '');
    }
  }, [quill_text, is_edited]);

  const handleEditPost = () => {
    if (user.user_id !== globalUser?.user_id) {
      alertFeedback('warning', 'You are not owner of this post!');
      return;
    }

    setPostForEditing(post);
    quillRef.current?.focus();
    changeEditorKind('quill');
    handlePopoverClose();
  };

  const handleReplyPost = () => {
    setPostForReplying(post);
    quillRef.current?.focus();
    changeEditorKind('quill');
    handlePopoverClose();
  };

  const handleDeletePost = () => {
    if (user.user_id !== globalUser?.user_id) {
      alertFeedback('warning', 'You are not owner of this post!');
      return;
    }

    const result = window.confirm('Are you sure to delete this post?');
    if (!result) {
      return;
    }

    deletePost({
      variables: {
        id: post_id,
        userId: globalUser.user_id,
      },
    });

    handlePopoverClose();
  };

  const created_at_date =
    typeof created_at === 'string' ? new Date(created_at) : created_at;

  const open = Boolean(anchorEl);

  const actions = [
    {
      name: 'Edit Post',
      action: handleEditPost,
      icon: <DiEdit color="gray" />,
    },
    {
      name: 'Reply',
      action: handleReplyPost,
      icon: <DiReply color="gray" />,
    },
    {
      name: 'Delete Post',
      action: handleDeletePost,
      icon: <DiRemove color="gray" />,
    },
  ];

  const replyDecorator = reply_id ? (
    reply ? (
      <ReplyDecorator
        data={{
          username: reply.user.username,
          url: '',
          plainText: reply.plain_text,
          files: reply.files,
          edited: reply.is_edited,
        }}
      />
    ) : (
      <ReplyDecorator deleted />
    )
  ) : null;

  return (
    <>
      {replyDecorator}

      <PostHeader
        username={user.username}
        avatar={user.avatar_url || ''}
        date={created_at_date}
        openActionList={handlePopoverOpen}
      />

      <Stack
        gap="10px"
        sx={{
          paddingBottom: '20px',
          borderBottom: `1px solid ${getColor('border-light-blue')}`,
        }}
      >
        <Typography variant="body2" ref={postElement} color="text.dark" />

        <AttachmentList files={files} post={post} />

        <ReactionList reactions={reactions} post={post} />
      </Stack>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <ActionList actions={actions} />
      </Popover>
    </>
  );
}
