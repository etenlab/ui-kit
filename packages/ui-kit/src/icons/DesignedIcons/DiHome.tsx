import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import HomeBlue from './svg-sources/home-blue.svg';
import HomeDark from './svg-sources/home-dark.svg';
import HomeGray from './svg-sources/home-gray.svg';
import HomeRed from './svg-sources/home-red.svg';
import HomeWhite from './svg-sources/home-white.svg';
import { DiColors } from './colors';

export function DiHome(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Home = HomeDark;
  if (color) {
    switch (color) {
      case 'blue':
        Home = HomeBlue;
        break;
      case 'gray':
        Home = HomeGray;
        break;
      case 'red':
        Home = HomeRed;
        break;
      case 'white':
        Home = HomeWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Home />
    </SvgIcon>
  );
}
