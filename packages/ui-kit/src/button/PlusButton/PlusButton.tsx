import React from 'react';

import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material';

import { FiPlus } from '../../icons';

type PlusButtonProps = Omit<ButtonProps, 'variant' | 'onClick'> & {
  variant: 'primary' | 'secondary';
  onClick(): void;
};

export function PlusButton({ variant, onClick }: PlusButtonProps) {
  const color: 'blue-primary' | 'light-blue' =
    variant === 'primary' ? 'blue-primary' : 'light-blue';

  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      sx={{ padding: '6px', minWidth: 0 }}
    >
      <FiPlus style={{ fontSize: '24px' }} />
    </Button>
  );
}
