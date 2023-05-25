import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import MapBlue from './svg-sources/map-blue.svg';
import MapDark from './svg-sources/map-dark.svg';
import MapGray from './svg-sources/map-gray.svg';
import MapRed from './svg-sources/map-red.svg';
import MapWhite from './svg-sources/map-white.svg';
import { DiColors } from './colors';

export function DiMap(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Map = MapDark;
  if (color) {
    switch (color) {
      case 'blue':
        Map = MapBlue;
        break;
      case 'gray':
        Map = MapGray;
        break;
      case 'red':
        Map = MapRed;
        break;
      case 'white':
        Map = MapWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Map />
    </SvgIcon>
  );
}
