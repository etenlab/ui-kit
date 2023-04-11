import React from 'react';

import { InputAdornment, TextFieldProps } from '@mui/material';
import { CiSearch } from '../../icons';
import { Input } from '../Input';

export function SearchInput({
  valid,
  label,
  ...props
}: TextFieldProps & { valid?: boolean; label?: string }) {
  const InputProps = {
    startAdornment: (
      <InputAdornment position="start" sx={{ marginRight: '-4px' }}>
        <CiSearch style={{ fontSize: '24px', strokeWidth: '0.5' }} />
      </InputAdornment>
    ),
  };

  return (
    <Input
      withLegend={false}
      InputProps={InputProps}
      placeholder={label}
      {...props}
    />
  );
}
