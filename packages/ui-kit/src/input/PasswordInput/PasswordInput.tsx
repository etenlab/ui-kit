import React from 'react';

import { TextFieldProps, IconButton } from '@mui/material';
import { DiPasswordNv, DiPasswordV } from '../../icons';
import { useColorModeContext } from '../../ThemeProvider';
import { Input } from '../Input';

export function PasswordInput({
  valid,
  show,
  onClickShowIcon,
  ...props
}: TextFieldProps & {
  valid?: boolean;
  show?: boolean;
  onClickShowIcon(): void;
}) {
  const { getColor } = useColorModeContext();
  let color: string;

  if (valid === undefined) {
    color = getColor('dark');
  } else if (valid === true) {
    color = getColor('green');
  } else {
    color = getColor('red');
  }

  const InputProps = {
    endAdornment: (
      <IconButton onClick={onClickShowIcon} sx={{ color }}>
        {show ? <DiPasswordV /> : <DiPasswordNv />}
      </IconButton>
    ),
  };

  return (
    <Input
      withLegend={false}
      InputProps={InputProps}
      type={show ? 'text' : 'password'}
      label={props.label}
      valid={valid}
      {...props}
    />
  );
}
