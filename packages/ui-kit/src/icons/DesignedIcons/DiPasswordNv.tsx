import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import PasswordNvBlue from './svg-sources/password_nv-blue.svg';
import PasswordNvDark from './svg-sources/password_nv-dark.svg';
import PasswordNvGray from './svg-sources/password_nv-gray.svg';
import PasswordNvRed from './svg-sources/password_nv-red.svg';
import PasswordNvWhite from './svg-sources/password_nv-white.svg';
import { DiColors } from './colors';

export function DiPasswordNv(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let PasswordNv = PasswordNvDark;
  if (color) {
    switch (color) {
      case 'blue':
        PasswordNv = PasswordNvBlue;
        break;
      case 'gray':
        PasswordNv = PasswordNvGray;
        break;
      case 'red':
        PasswordNv = PasswordNvRed;
        break;
      case 'white':
        PasswordNv = PasswordNvWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <PasswordNv />
    </SvgIcon>
  );
}
