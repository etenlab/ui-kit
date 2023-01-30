import React from 'react';

import { Button } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  onClick(): void;
};

export function PlusButton({ variant, onClick }: ButtonProps) {
  const color: 'blue-primary' | 'light-blue' =
    variant === 'primary' ? 'blue-primary' : 'light-blue';

  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      sx={{ padding: '6px', minWidth: 0 }}
    >
      <AddIcon />
    </Button>
  );
}
