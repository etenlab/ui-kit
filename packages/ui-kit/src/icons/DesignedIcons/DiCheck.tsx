import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import CheckBlue from './svg-sources/check-blue.svg';
import CheckDark from './svg-sources/check-dark.svg';
import CheckGray from './svg-sources/check-gray.svg';
import CheckRed from './svg-sources/check-red.svg';
import CheckWhite from './svg-sources/check-white.svg';
import { DiColors } from './colors';

export function DiCheck(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Check = CheckDark;
  if (color) {
    switch (color) {
      case 'blue':
        Check = CheckBlue;
        break;
      case 'gray':
        Check = CheckGray;
        break;
      case 'red':
        Check = CheckRed;
        break;
      case 'white':
        Check = CheckWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Check />
    </SvgIcon>
  );
}
