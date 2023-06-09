import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import Flag2 from './svg-sources/flag-2.svg';

export function DiFlag2(props: Omit<SvgIconProps, 'color'>) {
  return (
    <SvgIcon {...props}>
      <Flag2 />
    </SvgIcon>
  );
}
