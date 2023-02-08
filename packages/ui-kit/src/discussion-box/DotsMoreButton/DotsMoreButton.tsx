import React, { MouseEvent } from 'react';

import { IconButton } from '@mui/material';
import { BiDotsHorizontalRounded } from '../../icons';

type DotsMoreButtonProps = {
  onClick(event: MouseEvent<HTMLButtonElement>): void;
};

export function DotsMoreButton({ onClick }: DotsMoreButtonProps) {
  return (
    <IconButton onClick={onClick}>
      <BiDotsHorizontalRounded />
    </IconButton>
  );
}
