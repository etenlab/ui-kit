import React from 'react';

import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material';

import { DiAdd } from '../../icons';

type PlusButtonProps = Omit<ButtonProps, 'variant' | 'onClick'> & {
  variant: 'primary' | 'secondary';
  onClick(): void;
};

export function PlusButton({ variant, onClick, ...props }: PlusButtonProps) {
  const color: 'blue-primary' | 'light-blue' =
    variant === 'primary' ? 'blue-primary' : 'light-blue';

  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      sx={{ padding: '6px', minWidth: 0 }}
      {...props}
    >
      <DiAdd style={{ fontSize: '24px' }} />
    </Button>
  );
}
