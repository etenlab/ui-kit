import React from 'react';

import { TextField, TextFieldProps } from '@mui/material';

export function Input({
  valid,
  withLegend,
  ...props
}: TextFieldProps & { valid?: boolean; withLegend?: boolean }) {
  let sxObj = props.sx ? props.sx : {};
  sxObj =
    withLegend !== undefined && !withLegend
      ? {
          ...sxObj,
          '& label.MuiInputLabel-shrink': {
            display: 'none',
          },
          '& legend': {
            display: 'none',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            top: 0,
          },
        }
      : sxObj;

  let color: 'green' | 'red' | 'gray' = 'gray';

  if (valid) {
    color = 'green';
  }

  if (valid === false) {
    color = 'red';
  }

  return (
    <TextField
      variant="outlined"
      {...props}
      sx={sxObj}
      color={color}
      focused={valid === undefined ? false : true}
    />
  );
}
