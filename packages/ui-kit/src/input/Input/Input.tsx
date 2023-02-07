import React from 'react';

import { TextField, TextFieldProps } from '@mui/material';

export function Input(
  props: TextFieldProps & { valid?: boolean; withLegend?: boolean }
) {
  let sxObj = props.sx ? props.sx : {};
  sxObj =
    props.withLegend !== undefined && !props.withLegend
      ? {
          ...sxObj,
          '& label.MuiFormLabel-filled': {
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

  if (props.valid) {
    color = 'green';
  }

  if (props.valid === false) {
    color = 'red';
  }

  return (
    <TextField
      variant="outlined"
      {...props}
      sx={sxObj}
      color={color}
      focused={props.valid === undefined ? false : true}
    />
  );
}
