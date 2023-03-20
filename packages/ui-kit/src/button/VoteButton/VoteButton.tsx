import React from 'react';

import { useTheme, PaletteColor } from '@mui/material';
import { BiLike, BiDislike } from '../../icons';

import { StyledButton } from './styled';

type VoteButtonProps = {
  isLike?: boolean;
  count?: number;
  onClick(): void;
};

export function VoteButton({
  isLike = true,
  count = 0,
  onClick,
}: VoteButtonProps) {
  const theme = useTheme();

  let color: 'red' | 'green' = isLike ? 'green' : 'red';
  let startIcon = isLike ? <BiLike /> : <BiDislike />;

  const bgColor = (
    theme.palette[
      isLike ? 'light-green' : ('light-red' as keyof typeof theme.palette)
    ] as PaletteColor
  ).main;
  const textColor = (
    theme.palette[
      isLike ? 'green' : ('red' as keyof typeof theme.palette)
    ] as PaletteColor
  ).main;

  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      startIcon={startIcon}
      color={color}
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        ':hover': {
          backgroundColor: bgColor,
        },
      }}
    >
      <span>{count}</span>
    </StyledButton>
  );
}
