import React, { MouseEvent } from 'react';

import { IconButton } from '@mui/material';
import { colors } from '../../ThemeProvider';
import { BiChevronsDown } from '../../icons';

type ScrollDownButtonProps = {
  /**
   * Click Event handler,
   */
  onClick(event: MouseEvent<HTMLButtonElement>): void;
};

/**
 * Primary UI component to open emoji picker in the discussion-box
 */
export function ScrollDownButton({ onClick }: ScrollDownButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'sticky',
        left: '93%',
        bottom: 30,
        width: '30px',
        height: '30px',
        border: `1px solid ${colors['gray']}`,
        background: colors['white'],
      }}
    >
      <BiChevronsDown />
    </IconButton>
  );
}
