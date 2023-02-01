import React from 'react';

import { InputAdornment, TextFieldProps } from '@mui/material';
import { CiSearch } from '../../icons';
import { Input } from '../Input';

export function SearchInput(props: TextFieldProps & { valid?: boolean }) {
  return (
    <Input
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <CiSearch />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
