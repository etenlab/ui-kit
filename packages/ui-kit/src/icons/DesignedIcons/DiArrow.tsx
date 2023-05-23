import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as ArrowBlue } from './svg-sources/arrow-blue.svg';
import { ReactComponent as ArrowDark } from './svg-sources/arrow-dark.svg';
import { ReactComponent as ArrowGray } from './svg-sources/arrow-gray.svg';
import { ReactComponent as ArrowRed } from './svg-sources/arrow-red.svg';
import { ReactComponent as ArrowWhite } from './svg-sources/arrow-white.svg';
import { DiColors } from './colors';

export function DiArrow(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Arrow = ArrowDark;
  if (color) {
    switch (color) {
      case 'blue':
        Arrow = ArrowBlue;
        break;
      case 'gray':
        Arrow = ArrowGray;
        break;
      case 'red':
        Arrow = ArrowRed;
        break;
      case 'white':
        Arrow = ArrowWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Arrow />
    </SvgIcon>
  );
}
