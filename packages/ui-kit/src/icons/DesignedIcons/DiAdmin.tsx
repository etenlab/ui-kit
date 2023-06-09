import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import AdminBlue from './svg-sources/admin-blue.svg';
import AdminDark from './svg-sources/admin-dark.svg';
import AdminGray from './svg-sources/admin-gray.svg';
import AdminRed from './svg-sources/admin-red.svg';
import AdminWhite from './svg-sources/admin-white.svg';
import { DiColors } from './colors';

export function DiAdmin(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Admin = AdminDark;
  if (color) {
    switch (color) {
      case 'blue':
        Admin = AdminBlue;
        break;
      case 'gray':
        Admin = AdminGray;
        break;
      case 'red':
        Admin = AdminRed;
        break;
      case 'white':
        Admin = AdminWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Admin />
    </SvgIcon>
  );
}
