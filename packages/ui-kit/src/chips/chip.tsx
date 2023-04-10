import React from 'react';

import { Chip as MuiChip } from '@mui/material';
import { IoCloseCircle } from '../icons';

interface IChip {
  name: string;
  count: number;
  isNode: boolean;
  isChecked?: boolean;
  clickHandler: (name: string, isChecked: boolean) => void;
}

export const Chip = ({
  name,
  count,
  isNode,
  isChecked = false,
  clickHandler,
}: IChip) => {
  return (
    <MuiChip
      label={`${name} (${count})`}
      color={isNode ? 'warning' : 'success'}
      variant={isChecked ? 'filled' : 'outlined'}
      onClick={() => clickHandler(name, isChecked)}
      sx={isChecked ? { color: 'white !important' } : {}}
      size={'small'}
      onDelete={isChecked ? () => clickHandler(name, isChecked) : undefined}
      deleteIcon={<IoCloseCircle color="white" />}
    />
  );
};
