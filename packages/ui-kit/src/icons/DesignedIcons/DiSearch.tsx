import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import SearchBlue from './svg-sources/search-blue.svg';
import SearchDark from './svg-sources/search-dark.svg';
import SearchGray from './svg-sources/search-gray.svg';
import SearchRed from './svg-sources/search-red.svg';
import SearchWhite from './svg-sources/search-white.svg';
import { DiColors } from './colors';

export function DiSearch(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Search = SearchDark;
  if (color) {
    switch (color) {
      case 'blue':
        Search = SearchBlue;
        break;
      case 'gray':
        Search = SearchGray;
        break;
      case 'red':
        Search = SearchRed;
        break;
      case 'white':
        Search = SearchWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Search />
    </SvgIcon>
  );
}