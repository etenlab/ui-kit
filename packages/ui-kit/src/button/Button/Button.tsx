import React from 'react';

import { BiRightArrowAlt } from '../../icons';

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
      endIcon={withIcon ? <BiRightArrowAlt /> : null}
    >
      {children}
    </StyledButton>
  );
}
