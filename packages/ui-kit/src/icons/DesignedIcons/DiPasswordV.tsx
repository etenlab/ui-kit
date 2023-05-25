import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import PasswordVBlue from './svg-sources/password_v-blue.svg';
import PasswordVDark from './svg-sources/password_v-dark.svg';
import PasswordVGray from './svg-sources/password_v-gray.svg';
import PasswordVRed from './svg-sources/password_v-red.svg';
import PasswordVWhite from './svg-sources/password_v-white.svg';
import { DiColors } from './colors';

export function DiPasswordV(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let PasswordV = PasswordVDark;
  if (color) {
    switch (color) {
      case 'blue':
        PasswordV = PasswordVBlue;
        break;
      case 'gray':
        PasswordV = PasswordVGray;
        break;
      case 'red':
        PasswordV = PasswordVRed;
        break;
      case 'white':
        PasswordV = PasswordVWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <PasswordV />
    </SvgIcon>
  );
}
