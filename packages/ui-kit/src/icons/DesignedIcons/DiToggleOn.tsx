import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ToggleOnBlue from './svg-sources/toggle-on-blue.svg';
import ToggleOnDark from './svg-sources/toggle-on-dark.svg';
import ToggleOnGray from './svg-sources/toggle-on-gray.svg';
import ToggleOnRed from './svg-sources/toggle-on-red.svg';
import ToggleOnWhite from './svg-sources/toggle-on-white.svg';
import { DiColors } from './colors';

export function DiToggleOn(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let ToggleOn = ToggleOnDark;
  if (color) {
    switch (color) {
      case 'blue':
        ToggleOn = ToggleOnBlue;
        break;
      case 'gray':
        ToggleOn = ToggleOnGray;
        break;
      case 'red':
        ToggleOn = ToggleOnRed;
        break;
      case 'white':
        ToggleOn = ToggleOnWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <ToggleOn />
    </SvgIcon>
  );
}
