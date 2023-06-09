import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import DropDownBlue from './svg-sources/drop-down-blue.svg';
import DropDownDark from './svg-sources/drop-down-dark.svg';
import DropDownGray from './svg-sources/drop-down-gray.svg';
import DropDownRed from './svg-sources/drop-down-red.svg';
import DropDownWhite from './svg-sources/drop-down-white.svg';
import { DiColors } from './colors';

export function DiDropDown(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let DropDown = DropDownDark;
  if (color) {
    switch (color) {
      case 'blue':
        DropDown = DropDownBlue;
        break;
      case 'gray':
        DropDown = DropDownGray;
        break;
      case 'red':
        DropDown = DropDownRed;
        break;
      case 'white':
        DropDown = DropDownWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <DropDown />
    </SvgIcon>
  );
}
