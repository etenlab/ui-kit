import React from 'react';

import { InputAdornment, TextFieldProps } from '@mui/material';
import { CiSearch } from '../../icons';
import { Input } from '../Input';

export function SearchInput({
  valid,
  ...props
}: TextFieldProps & { valid?: boolean }) {
  const InputProps = {
    startAdornment: (
      <InputAdornment position="start">
        <CiSearch />
      </InputAdornment>
    ),
  };
  return <Input withLegend={true} InputProps={InputProps} {...props} />;
}
