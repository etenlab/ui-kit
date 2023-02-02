import React from 'react';

import { BiRightArrowAlt } from '../../icons';

import { StyledButton } from './styled';

type ButtonProps = {
  fullWidth?: boolean;
  withIcon?: boolean;
  children?: React.ReactNode;
  variant: 'primary' | 'secondary';
  color: 'blue-primary' | 'dark';
  onClick(): void;
};

export function Button({
  variant,
  fullWidth = false,
  withIcon = false,
  color = 'blue-primary',
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
      color={color}
    >
      {children}
    </StyledButton>
  );
}
