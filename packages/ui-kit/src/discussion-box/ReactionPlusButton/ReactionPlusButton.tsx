import React, { MouseEvent } from 'react';

import { DiSmile } from '../../icons';
import { ReactionPlusButtonWrapper } from './styled';

type ReactionPlusButtonProps = {
  /**
   * Click Event handler,
   */
  onClick(event: MouseEvent<HTMLButtonElement>): void;
};

/**
 * Primary UI component to open emoji picker in the discussion-box
 */
export function ReactionPlusButton({ onClick }: ReactionPlusButtonProps) {
  return (
    <ReactionPlusButtonWrapper onClick={onClick}>
      <DiSmile />
    </ReactionPlusButtonWrapper>
  );
}
