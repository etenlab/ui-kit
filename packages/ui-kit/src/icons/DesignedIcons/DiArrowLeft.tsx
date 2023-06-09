import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ArrowLeftBlue from './svg-sources/arrow-left-blue.svg';
import ArrowLeftDark from './svg-sources/arrow-left-dark.svg';
import ArrowLeftGray from './svg-sources/arrow-left-gray.svg';
import ArrowLeftRed from './svg-sources/arrow-left-red.svg';
import ArrowLeftWhite from './svg-sources/arrow-left-white.svg';
import { DiColors } from './colors';

export function DiArrowLeft(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let ArrowLeft = ArrowLeftDark;
  if (color) {
    switch (color) {
      case 'blue':
        ArrowLeft = ArrowLeftBlue;
        break;
      case 'gray':
        ArrowLeft = ArrowLeftGray;
        break;
      case 'red':
        ArrowLeft = ArrowLeftRed;
        break;
      case 'white':
        ArrowLeft = ArrowLeftWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <ArrowLeft />
    </SvgIcon>
  );
}
