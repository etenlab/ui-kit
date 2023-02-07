import React from 'react';

import { InputAdornment, TextFieldProps } from '@mui/material';
import { CiSearch } from '../../icons';
import { Input } from '../Input';

export function SearchInput(
  props: TextFieldProps & { valid?: boolean; withLegend?: boolean }
) {
  const InputProps =
    props.withLegend !== undefined && !props.withLegend
      ? {
          startAdornment: (
            <InputAdornment position="start">
              <CiSearch />
            </InputAdornment>
          ),
        }
      : undefined;
  return (
    <Input withLegend={props.withLegend} InputProps={InputProps} {...props} />
  );
}
