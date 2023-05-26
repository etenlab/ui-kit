import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import Flag from './svg-sources/flag-1.svg';

export function DiFlag1(props: Omit<SvgIconProps, 'color'>) {
  return (
    <SvgIcon {...props}>
      <Flag />
    </SvgIcon>
  );
}
