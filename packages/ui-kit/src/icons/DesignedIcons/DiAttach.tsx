import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import AttachBlue from './svg-sources/attach-blue.svg';
import AttachDark from './svg-sources/attach-dark.svg';
import AttachGray from './svg-sources/attach-gray.svg';
import AttachRed from './svg-sources/attach-red.svg';
import AttachWhite from './svg-sources/attach-white.svg';
import { DiColors } from './colors';

export function DiAttach(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Attach = AttachDark;
  if (color) {
    switch (color) {
      case 'blue':
        Attach = AttachBlue;
        break;
      case 'gray':
        Attach = AttachGray;
        break;
      case 'red':
        Attach = AttachRed;
        break;
      case 'white':
        Attach = AttachWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Attach />
    </SvgIcon>
  );
}
