import React from 'react';

import { BiLike, BiDislike } from '../../icons';

import { StyledButton } from './styled';
import { ButtonProps } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';

type VoteButtonProps = Omit<ButtonProps, 'variant' | 'onClick'> & {
  isLike?: boolean;
  count?: number;
  onClick(): void;
};

export function VoteButton({
  isLike = true,
  count = 0,
  onClick,
  ...props
}: VoteButtonProps) {
  const { getColor } = useColorModeContext();

  const color: 'red' | 'green' = isLike ? 'green' : 'red';
  const startIcon = isLike ? <BiLike /> : <BiDislike />;

  const bgColor = isLike ? getColor('light-green') : getColor('light-red');

  const textColor = isLike ? getColor('green') : getColor('red');
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
      {...props}
    >
      <span>{count}</span>
    </StyledButton>
  );
}
