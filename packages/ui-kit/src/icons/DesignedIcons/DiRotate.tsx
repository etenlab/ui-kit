import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import RotateBlue from './svg-sources/rotate-blue.svg';
import RotateDark from './svg-sources/rotate-dark.svg';
import RotateGray from './svg-sources/rotate-gray.svg';
import RotateRed from './svg-sources/rotate-red.svg';
import RotateWhite from './svg-sources/rotate-white.svg';
import { DiColors } from './colors';

export function DiRotate(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Rotate = RotateDark;
  if (color) {
    switch (color) {
      case 'blue':
        Rotate = RotateBlue;
        break;
      case 'gray':
        Rotate = RotateGray;
        break;
      case 'red':
        Rotate = RotateRed;
        break;
      case 'white':
        Rotate = RotateWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Rotate />
    </SvgIcon>
  );
}
