import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ViewColumnBlue from './svg-sources/view-column-blue.svg';
import ViewColumnDark from './svg-sources/view-column-dark.svg';
import ViewColumnGray from './svg-sources/view-column-gray.svg';
import ViewColumnRed from './svg-sources/view-column-red.svg';
import ViewColumnWhite from './svg-sources/view-column-white.svg';
import { DiColors } from './colors';

export function DiViewColumn(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let ViewColumn = ViewColumnDark;
  if (color) {
    switch (color) {
      case 'blue':
        ViewColumn = ViewColumnBlue;
        break;
      case 'gray':
        ViewColumn = ViewColumnGray;
        break;
      case 'red':
        ViewColumn = ViewColumnRed;
        break;
      case 'white':
        ViewColumn = ViewColumnWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <ViewColumn />
    </SvgIcon>
  );
}
