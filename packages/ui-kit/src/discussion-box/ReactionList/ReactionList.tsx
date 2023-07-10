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
      global: { user },
    },
    actions: { openEmojiPicker, deleteReaction, createReaction },
  } = useDiscussionContext();

  const handleClickReaction = (content: string) => {
    const reaction = reactions.find(
      (reaction) =>
        reaction.content === content && reaction.user_id === user?.user_id,
    );

    if (reaction) {
      deleteReaction({
        variables: {
          id: reaction.reaction_id,
          userId: user?.user_id,
        },
      });
    } else {
      createReaction({
        variables: {
          reaction: {
            content,
            post_id: post.post_id,
            user_id: user?.user_id,
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
