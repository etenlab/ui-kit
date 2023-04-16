import React from 'react';

import { Button } from '@mui/material';

import { FiFilter } from '../../icons';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  onClick(): void;
};

export function FilterButton({ variant, onClick }: ButtonProps) {
  const color: 'blue-primary' | 'light-blue' =
    variant === 'primary' ? 'blue-primary' : 'light-blue';

  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      sx={{ padding: '6px', minWidth: 0 }}
    >
      <FiFilter style={{ fontSize: '24px' }} />
    </Button>
  );
}
