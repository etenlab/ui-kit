import React from 'react';

import { ButtonProps } from '@mui/material';
import { DiArrowRight } from '../../icons';

import { StyledButton } from './styled';

export function Button(
  props: Omit<ButtonProps, 'endIcon'> & {
    endIcon?: boolean | React.ReactNode;
    component?: string; // component to be passed to MUI button
  },
) {
  const args = {
    ...props,
    endIcon:
      props.endIcon === true ? <DiArrowRight color="white" /> : props.endIcon,
  };

  return <StyledButton {...args} />;
}
