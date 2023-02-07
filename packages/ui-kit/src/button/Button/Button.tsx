import React from 'react';

import { ButtonProps } from '@mui/material';
import { BiRightArrowAlt } from '../../icons';

import { StyledButton } from './styled';

export function Button(
  props: Omit<ButtonProps, 'endIcon'> & {
    endIcon?: boolean | React.ReactNode;
  }
) {
  const args = {
    ...props,
    endIcon: props.endIcon === true ? <BiRightArrowAlt /> : props.endIcon,
  };

  return <StyledButton {...args} />;
}
