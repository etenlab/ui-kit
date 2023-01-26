import React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { StyledButton } from './styled';

type ButtonProps = {
  fullWidth?: boolean;
  withIcon?: boolean;
  children?: React.ReactNode;
  variant: 'primary' | 'secondary';
};

export function Button({
  variant,
  fullWidth = false,
  withIcon = false,
  children,
}: ButtonProps) {
  const variantType = variant === 'primary' ? 'contained' : 'outlined';

  return (
    <StyledButton
      variant={variantType}
      fullWidth={fullWidth}
      endIcon={withIcon ? <ArrowForwardIcon /> : null}
    >
      {children}
    </StyledButton>
  );
}
