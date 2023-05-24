import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ViewRowBlue from './svg-sources/view-row-blue.svg';
import ViewRowDark from './svg-sources/view-row-dark.svg';
import ViewRowGray from './svg-sources/view-row-gray.svg';
import ViewRowRed from './svg-sources/view-row-red.svg';
import ViewRowWhite from './svg-sources/view-row-white.svg';
import { DiColors } from './colors';

export function DiViewRow(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let ViewRow = ViewRowDark;
  if (color) {
    switch (color) {
      case 'blue':
        ViewRow = ViewRowBlue;
        break;
      case 'gray':
        ViewRow = ViewRowGray;
        break;
      case 'red':
        ViewRow = ViewRowRed;
        break;
      case 'white':
        ViewRow = ViewRowWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <ViewRow />
    </SvgIcon>
  );
}
