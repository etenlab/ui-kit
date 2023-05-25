import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import DataBlue from './svg-sources/data-blue.svg';
import DataDark from './svg-sources/data-dark.svg';
import DataGray from './svg-sources/data-gray.svg';
import DataRed from './svg-sources/data-red.svg';
import DataWhite from './svg-sources/data-white.svg';
import { DiColors } from './colors';

export function DiData(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Data = DataDark;
  if (color) {
    switch (color) {
      case 'blue':
        Data = DataBlue;
        break;
      case 'gray':
        Data = DataGray;
        break;
      case 'red':
        Data = DataRed;
        break;
      case 'white':
        Data = DataWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Data />
    </SvgIcon>
  );
}
