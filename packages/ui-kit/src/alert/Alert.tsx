import React from 'react';

import { Alert as MuiAlert, AlertProps } from '@mui/material';

import { BiCheckCircle } from '../icons';

type CustomAlertProps = AlertProps & {
  content?: string;
  rel?: string;
  rev?: string;
};

export const Alert = React.forwardRef<HTMLDivElement, CustomAlertProps>(
  (props, ref) => (
    <MuiAlert
      ref={ref}
      iconMapping={{
        success: <BiCheckCircle />,
      }}
      {...props}
    />
  ),
);
