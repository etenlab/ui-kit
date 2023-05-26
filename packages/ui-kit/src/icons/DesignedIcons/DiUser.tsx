import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import UserBlue from './svg-sources/user-blue.svg';
import UserDark from './svg-sources/user-dark.svg';
import UserGray from './svg-sources/user-gray.svg';
import UserRed from './svg-sources/user-red.svg';
import UserWhite from './svg-sources/user-white.svg';
import { DiColors } from './colors';

export function DiUser(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let User = UserDark;
  if (color) {
    switch (color) {
      case 'blue':
        User = UserBlue;
        break;
      case 'gray':
        User = UserGray;
        break;
      case 'red':
        User = UserRed;
        break;
      case 'white':
        User = UserWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <User />
    </SvgIcon>
  );
}