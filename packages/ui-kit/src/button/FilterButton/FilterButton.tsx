import React from 'react';

import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material';

import { FiFilter } from '../../icons';

type FilterButtonProps = Omit<ButtonProps, 'variant' | 'onClick'> & {
  variant: 'primary' | 'secondary';
  onClick(): void;
};

export function FilterButton({
  variant,
  onClick,
  ...props
}: FilterButtonProps) {
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
      <FiFilter style={{ fontSize: '24px' }} />
    </Button>
  );
}
