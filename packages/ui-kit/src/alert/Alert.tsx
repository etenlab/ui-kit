import React from 'react';

import { Alert as MuiAlert, AlertProps } from '@mui/material';

import { BiCheckCircle } from '../icons';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => (
    <MuiAlert
      ref={ref}
      iconMapping={{
        success: <BiCheckCircle />,
      }}
      {...props}
    />
  )
);
