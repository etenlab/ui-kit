import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import AddBlue from './svg-sources/add-blue.svg';
import AddDark from './svg-sources/add-dark.svg';
import AddGray from './svg-sources/add-gray.svg';
import AddRed from './svg-sources/add-red.svg';
import AddWhite from './svg-sources/add-white.svg';
import { DiColors } from './colors';

export function DiAdd(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Add = AddDark;
  if (color) {
    switch (color) {
      case 'blue':
        Add = AddBlue;
        break;
      case 'gray':
        Add = AddGray;
        break;
      case 'red':
        Add = AddRed;
        break;
      case 'white':
        Add = AddWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Add />
    </SvgIcon>
  );
}
