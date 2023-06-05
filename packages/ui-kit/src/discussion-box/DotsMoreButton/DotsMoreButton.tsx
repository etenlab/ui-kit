import React, { MouseEvent } from 'react';

import { IconButton } from '@mui/material';
import { DiMore } from '../../icons';

type DotsMoreButtonProps = {
  onClick(event: MouseEvent<HTMLButtonElement>): void;
};

export function DotsMoreButton({ onClick }: DotsMoreButtonProps) {
  return (
    <IconButton onClick={onClick}>
      <DiMore />
    </IconButton>
  );
}
