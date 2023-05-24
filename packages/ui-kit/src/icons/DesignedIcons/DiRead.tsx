import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ReadBlue from './svg-sources/read-blue.svg';
import ReadDark from './svg-sources/read-dark.svg';
import ReadGray from './svg-sources/read-gray.svg';
import ReadRed from './svg-sources/read-red.svg';
import ReadWhite from './svg-sources/read-white.svg';
import { DiColors } from './colors';

export function DiRead(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Read = ReadDark;
  if (color) {
    switch (color) {
      case 'blue':
        Read = ReadBlue;
        break;
      case 'gray':
        Read = ReadGray;
        break;
      case 'red':
        Read = ReadRed;
        break;
      case 'white':
        Read = ReadWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Read />
    </SvgIcon>
  );
}
