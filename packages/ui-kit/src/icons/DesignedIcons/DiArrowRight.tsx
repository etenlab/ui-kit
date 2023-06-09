import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ArrowRightBlue from './svg-sources/arrow-right-blue.svg';
import ArrowRightDark from './svg-sources/arrow-right-dark.svg';
import ArrowRightGray from './svg-sources/arrow-right-gray.svg';
import ArrowRightRed from './svg-sources/arrow-right-red.svg';
import ArrowRightWhite from './svg-sources/arrow-right-white.svg';
import { DiColors } from './colors';

export function DiArrowRight(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let ArrowRight = ArrowRightDark;
  if (color) {
    switch (color) {
      case 'blue':
        ArrowRight = ArrowRightBlue;
        break;
      case 'gray':
        ArrowRight = ArrowRightGray;
        break;
      case 'red':
        ArrowRight = ArrowRightRed;
        break;
      case 'white':
        ArrowRight = ArrowRightWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <ArrowRight />
    </SvgIcon>
  );
}
