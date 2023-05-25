import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import LogoutBlue from './svg-sources/logout-blue.svg';
import LogoutDark from './svg-sources/logout-dark.svg';
import LogoutGray from './svg-sources/logout-gray.svg';
import LogoutRed from './svg-sources/logout-red.svg';
import LogoutWhite from './svg-sources/logout-white.svg';
import { DiColors } from './colors';

export function DiLogout(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Logout = LogoutDark;
  if (color) {
    switch (color) {
      case 'blue':
        Logout = LogoutBlue;
        break;
      case 'gray':
        Logout = LogoutGray;
        break;
      case 'red':
        Logout = LogoutRed;
        break;
      case 'white':
        Logout = LogoutWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Logout />
    </SvgIcon>
  );
}
