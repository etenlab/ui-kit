import React from 'react';

import { TextField, TextFieldProps } from '@mui/material';

export function Input(props: TextFieldProps & { valid?: boolean }) {
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
      color={color}
      focused={props.valid === undefined ? false : true}
    />
  );
}
