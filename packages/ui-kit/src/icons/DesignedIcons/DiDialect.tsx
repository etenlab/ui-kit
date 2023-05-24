import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import DialectBlue from './svg-sources/dialect-blue.svg';
import DialectDark from './svg-sources/dialect-dark.svg';
import DialectGray from './svg-sources/dialect-gray.svg';
import DialectRed from './svg-sources/dialect-red.svg';
import DialectWhite from './svg-sources/dialect-white.svg';
import { DiColors } from './colors';

export function DiDialect(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Dialect = DialectDark;
  if (color) {
    switch (color) {
      case 'blue':
        Dialect = DialectBlue;
        break;
      case 'gray':
        Dialect = DialectGray;
        break;
      case 'red':
        Dialect = DialectRed;
        break;
      case 'white':
        Dialect = DialectWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Dialect />
    </SvgIcon>
  );
}
