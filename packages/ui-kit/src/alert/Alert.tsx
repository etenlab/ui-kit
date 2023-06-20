import React from 'react';

import { Alert as MuiAlert, AlertProps } from '@mui/material';

import { BiCheckCircle } from '../icons';

export function Alert(props: AlertProps) {
  return (
    <MuiAlert
      iconMapping={{
        success: <BiCheckCircle />,
      }}
      {...props}
    />
  );
}
