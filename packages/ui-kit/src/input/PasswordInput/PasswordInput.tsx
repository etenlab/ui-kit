import React from 'react';

import { TextFieldProps, IconButton } from '@mui/material';
import { CiUnread, CiRead } from '../../icons';
import { colors } from '../../ThemeProvider';
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
  let color: string;

  if (valid === undefined) {
    color = colors['dark'];
  } else if (valid === true) {
    color = colors['green'];
  } else {
    color = colors['red'];
  }

  const InputProps = {
    endAdornment: (
      <IconButton onClick={onClickShowIcon} sx={{ color }}>
        {show ? <CiRead /> : <CiUnread />}
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
