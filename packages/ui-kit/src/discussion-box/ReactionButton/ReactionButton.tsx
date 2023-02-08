import React from 'react';

import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { EmojiWrapper, Tooltip, EmojiCount, EmojiContainer } from './styled';
import { IReaction } from '../types';
import { TooltipContent } from '../TooltipContent';

interface ReactionButtonProps {
  /**
   * Emoji unified string ex: 1f606
   */
  emoji: string;
  /**
   * Collection of Reactions which has same content
   */
  reactions: IReaction[];
  /**
   * Callback function which runs whenever component clicked
   */
  onClick(emoji: string): void;
}

/**
 * Primary UI component for render Reaction result with Emoji icon and number of users who react
 */
export function ReactionButton({
  emoji,
  reactions,
  onClick,
}: ReactionButtonProps) {
  return (
    <Tooltip
      title={<TooltipContent reactions={reactions} emoji={emoji} />}
      arrow
    >
      <EmojiWrapper
        onClick={() => {
          onClick(emoji);
        }}
      >
        <EmojiContainer>
          <Emoji unified={emoji} emojiStyle={EmojiStyle.APPLE} size={17} />
        </EmojiContainer>
        <EmojiCount>{reactions.length}</EmojiCount>
      </EmojiWrapper>
    </Tooltip>
  );
}
