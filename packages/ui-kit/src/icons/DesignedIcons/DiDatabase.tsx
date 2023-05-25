import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import DatabaseBlue from './svg-sources/database-blue.svg';
import DatabaseDark from './svg-sources/database-dark.svg';
import DatabaseGray from './svg-sources/database-gray.svg';
import DatabaseRed from './svg-sources/database-red.svg';
import DatabaseWhite from './svg-sources/database-white.svg';
import { DiColors } from './colors';

export function DiDatabase(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Database = DatabaseDark;
  if (color) {
    switch (color) {
      case 'blue':
        Database = DatabaseBlue;
        break;
      case 'gray':
        Database = DatabaseGray;
        break;
      case 'red':
        Database = DatabaseRed;
        break;
      case 'white':
        Database = DatabaseWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Database />
    </SvgIcon>
  );
}
