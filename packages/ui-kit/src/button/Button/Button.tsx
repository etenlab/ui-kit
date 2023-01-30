import React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { StyledButton } from './styled';

type ButtonProps = {
  fullWidth?: boolean;
  withIcon?: boolean;
  children?: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick(): void;
};

export function Button({
  variant,
  fullWidth = false,
  withIcon = false,
  onClick,
  children,
}: ButtonProps) {
  const variantType = variant === 'primary' ? 'contained' : 'outlined';

  return (
    <StyledButton
      onClick={onClick}
      variant={variantType}
      fullWidth={fullWidth}
      endIcon={withIcon ? <ArrowForwardIcon /> : null}
    >
      {children}
    </StyledButton>
  );
}
