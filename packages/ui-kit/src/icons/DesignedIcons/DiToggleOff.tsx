import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ToggleOffBlue from './svg-sources/toggle-off-blue.svg';
import ToggleOffDark from './svg-sources/toggle-off-dark.svg';
import ToggleOffGray from './svg-sources/toggle-off-gray.svg';
import ToggleOffRed from './svg-sources/toggle-off-red.svg';
import ToggleOffWhite from './svg-sources/toggle-off-white.svg';
import { DiColors } from './colors';

export function DiToggleOff(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let ToggleOff = ToggleOffDark;
  if (color) {
    switch (color) {
      case 'blue':
        ToggleOff = ToggleOffBlue;
        break;
      case 'gray':
        ToggleOff = ToggleOffGray;
        break;
      case 'red':
        ToggleOff = ToggleOffRed;
        break;
      case 'white':
        ToggleOff = ToggleOffWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <ToggleOff />
    </SvgIcon>
  );
}
