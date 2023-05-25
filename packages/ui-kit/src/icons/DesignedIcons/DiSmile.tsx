import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import SmileBlue from './svg-sources/smile-blue.svg';
import SmileDark from './svg-sources/smile-dark.svg';
import SmileGray from './svg-sources/smile-gray.svg';
import SmileRed from './svg-sources/smile-red.svg';
import SmileWhite from './svg-sources/smile-white.svg';
import { DiColors } from './colors';

export function DiSmile(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Smile = SmileDark;
  if (color) {
    switch (color) {
      case 'blue':
        Smile = SmileBlue;
        break;
      case 'gray':
        Smile = SmileGray;
        break;
      case 'red':
        Smile = SmileRed;
        break;
      case 'white':
        Smile = SmileWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Smile />
    </SvgIcon>
  );
}
