import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import EditBlue from './svg-sources/edit-blue.svg';
import EditDark from './svg-sources/edit-dark.svg';
import EditGray from './svg-sources/edit-gray.svg';
import EditRed from './svg-sources/edit-red.svg';
import EditWhite from './svg-sources/edit-white.svg';
import { DiColors } from './colors';

export function DiEdit(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Edit = EditDark;
  if (color) {
    switch (color) {
      case 'blue':
        Edit = EditBlue;
        break;
      case 'gray':
        Edit = EditGray;
        break;
      case 'red':
        Edit = EditRed;
        break;
      case 'white':
        Edit = EditWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Edit />
    </SvgIcon>
  );
}
