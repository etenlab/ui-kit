import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ImportBlue from './svg-sources/import-blue.svg';
import ImportDark from './svg-sources/import-dark.svg';
import ImportGray from './svg-sources/import-gray.svg';
import ImportRed from './svg-sources/import-red.svg';
import ImportWhite from './svg-sources/import-white.svg';
import { DiColors } from './colors';

export function DiImport(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Import = ImportDark;
  if (color) {
    switch (color) {
      case 'blue':
        Import = ImportBlue;
        break;
      case 'gray':
        Import = ImportGray;
        break;
      case 'red':
        Import = ImportRed;
        break;
      case 'white':
        Import = ImportWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Import />
    </SvgIcon>
  );
}
