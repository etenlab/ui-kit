import React, { useMemo, MouseEvent } from 'react';

import { Stack } from '@mui/material';

import { ReactionButton } from '../ReactionButton';
import { ReactionPlusButton } from '../ReactionPlusButton';

import { IReaction, IPost } from '../utils/types';
import { sortByContent } from '../utils/helpers';

import { useDiscussionContext } from '../hooks/useDiscussionContext';

interface ReactionListProps {
  /**
   * Lists of reactions about specific post
   */
  reactions: IReaction[];
  post: IPost;
}

/**
 * List of Reactions
 */
export function ReactionList({ reactions, post }: ReactionListProps) {
  const {
    states: {
      global: { userId },
    },
    actions: { openEmojiPicker, deleteReaction, createReaction },
  } = useDiscussionContext();

  const handleClickReaction = (content: string) => {
    const reaction = reactions.find(
      (reaction) => reaction.content === content && reaction.user_id === userId,
    );

    if (reaction) {
      deleteReaction({
        variables: {
          id: reaction.id,
          userId,
        },
      });
    } else {
      createReaction({
        variables: {
          reaction: {
            content,
            post_id: post.id,
            user_id: userId,
          },
        },
      });
    }
  };

  const handleOpenEmojiPicker = (event: MouseEvent<HTMLButtonElement>) => {
    openEmojiPicker(event.currentTarget, post, 'react');
  };

  const contentReactions = useMemo(() => sortByContent(reactions), [reactions]);

  return (
    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
      {contentReactions.map(({ content, reactions }) => (
        <ReactionButton
          key={content}
          emoji={content}
          reactions={reactions}
          onClick={handleClickReaction}
        />
      ))}
      <ReactionPlusButton onClick={handleOpenEmojiPicker} />
    </Stack>
  );
}
