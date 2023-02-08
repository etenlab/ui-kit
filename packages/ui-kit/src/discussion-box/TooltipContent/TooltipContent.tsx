import React from 'react';

import { Box } from '@mui/material';
import { Emoji, EmojiStyle } from 'emoji-picker-react';

import { IReaction } from '../types';
import { EmojiWrapper, TooltipUserName } from './styled';

type TooltipContentProps = {
  /**
   * Array of Reactions for specific emoji
   */
  reactions: IReaction[];
  /**
   * Unified emoji string
   */
  emoji: string;
};

/**
 * Primary UI component to render emoji icon and reaction guys
 */
export const TooltipContent = ({ reactions, emoji }: TooltipContentProps) => {
  return (
    <Box
      sx={{
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <EmojiWrapper>
        <Emoji unified={emoji} emojiStyle={EmojiStyle.APPLE} size={50} />
      </EmojiWrapper>
      {reactions.map((reaction) => (
        <TooltipUserName key={reaction.id}>
          {reaction.user.username}
        </TooltipUserName>
      ))}
    </Box>
  );
};
