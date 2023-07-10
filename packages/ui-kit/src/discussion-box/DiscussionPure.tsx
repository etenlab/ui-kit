import React, { useEffect, useRef, useCallback } from 'react';

import {
  Stack,
  Snackbar,
  Alert,
  Popover,
  CircularProgress,
  Backdrop,
  Box,
} from '@mui/material';

import { EmojiPicker, EmojiClickData } from '../EmojiPicker';

import { InputButtonGroup } from './InputButtonGroup';

import { PostList } from './PostList';
import { ReactQuill } from './ReactQuill';
import { AudioRecorder } from './AudioRecorder';
import { VideoRecorder } from './VideoRecorder';

import { IPost, EditorKinds, IUser } from './utils/types';

import { useColorModeContext } from '../ThemeProvider';
import { useDiscussionContext } from './hooks/useDiscussionContext';

const InputComponents = {
  quill: <ReactQuill />,
  audio: <AudioRecorder />,
  video: <VideoRecorder />,
};

type InputComponentsKey = keyof typeof InputComponents;

export interface DiscussionPureProps {
  user: IUser;
  tableName: string;
  rowId: string;
  height: string;
}

/**
 * This component will mount once users route to '/tab1/discussion/:table_name/:row'.
 * The responsibility is to control Discussion Page and interact with server such as fetching, saving, deleting discussion data.
 */
export function DiscussionPure({
  user,
  tableName,
  rowId,
  height,
}: DiscussionPureProps) {
  const {
    states: { loading: discussionLoading, global, quillRef, uploading },
    actions: {
      changeDiscussion,
      changeEditorKind,
      setNewUser,
      closeFeedback,
      closeEmojiPicker,
      createReaction,
      deleteReaction,
    },
  } = useDiscussionContext();
  const { getColor } = useColorModeContext();

  const { snack, emoji, editorKind } = global;

  useEffect(() => {
    if (global.user?.user_id !== user.user_id) {
      setNewUser(user);
    }
  }, [user, setNewUser, global.user]);

  useEffect(() => {
    changeDiscussion({ table_name: tableName, row_id: rowId });
  }, [tableName, rowId, changeDiscussion]);

  const discussionRef = useRef<HTMLDivElement>(null);

  const handleEmojiClickByReact = useCallback(
    (post: IPost | null, emojiData: EmojiClickData) => {
      if (post) {
        const reaction = post.reactions.find(
          (reaction) =>
            reaction.content === emojiData.unified &&
            reaction.user_id === user.user_id,
        );

        if (reaction) {
          deleteReaction({
            variables: {
              id: reaction.reaction_id,
              userId: user.user_id,
            },
          });
        } else {
          createReaction({
            variables: {
              reaction: {
                content: emojiData.unified,
                post_id: post.post_id,
                user_id: user.user_id,
              },
            },
          });
        }
      }
    },
    [deleteReaction, createReaction, user],
  );

  const handleEmojiClickByQuill = useCallback(
    (emojiData: EmojiClickData) => {
      quillRef.current?.addEmoji(emojiData.emoji);
    },
    [quillRef],
  );

  const handleEmojiClick = useCallback(
    (emojiData: EmojiClickData) => {
      if (emoji.mode === 'quill') {
        handleEmojiClickByQuill(emojiData);
      }

      if (emoji.mode === 'react') {
        handleEmojiClickByReact(emoji.post, emojiData);
      }

      closeEmojiPicker();
    },
    [emoji, handleEmojiClickByQuill, handleEmojiClickByReact, closeEmojiPicker],
  );

  const handleChangeInput = (mode: EditorKinds) => {
    changeEditorKind(mode);
  };

  const openedEmojiPicker = Boolean(emoji.anchorEl);

  const InputComponent = editorKind
    ? InputComponents[editorKind as InputComponentsKey]
    : null;

  const InputPanel = editorKind ? (
    InputComponent
  ) : (
    <Box
      sx={{
        padding: '20px',
        borderRadius: '20px 20px 0 0',
        borderTop: `1px solid ${getColor('middle-gray')}`,
      }}
    >
      <InputButtonGroup onClick={handleChangeInput} />
    </Box>
  );

  const loading = discussionLoading || (uploading && editorKind !== null);

  return (
    <>
      <Stack
        justifyContent="space-between"
        style={{
          height,
          background: getColor('bg-main'),
        }}
        ref={discussionRef}
      >
        <PostList />
        {InputPanel}
      </Stack>

      <Popover
        open={discussionRef.current !== null}
        anchorEl={
          emoji.anchorEl === null ? discussionRef.current : emoji.anchorEl
        }
        onClose={closeEmojiPicker}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          display: openedEmojiPicker ? 'inherit' : 'none',
        }}
      >
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </Popover>

      <Snackbar
        open={snack.open}
        autoHideDuration={2000}
        onClose={closeFeedback}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        key="bottom-right"
      >
        <Alert
          variant="filled"
          onClose={closeFeedback}
          severity={snack.severity}
          sx={{ width: '100%' }}
        >
          {snack.message}
        </Alert>
      </Snackbar>

      <Backdrop
        sx={{ color: getColor('bg-main'), zIndex: 1000 }}
        open={loading}
      >
        <Stack justifyContent="center">
          <div style={{ margin: 'auto' }}>
            <CircularProgress color="inherit" />
          </div>
          <div>LOADING</div>
        </Stack>
      </Backdrop>
    </>
  );
}
