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
  const InputProps = {
    endAdornment: (
      <IconButton onClick={onClickShowIcon} sx={{ color: colors['dark'] }}>
        {show ? <CiRead /> : <CiUnread />}
      </IconButton>
    ),
  };

  console.log(props);

  return (
    <Input
      withLegend={false}
      InputProps={InputProps}
      type={show ? 'text' : 'password'}
      label={props.label}
      {...props}
    />
  );
}
