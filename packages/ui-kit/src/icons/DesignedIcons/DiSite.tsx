import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import SiteBlue from './svg-sources/site-blue.svg';
import SiteDark from './svg-sources/site-dark.svg';
import SiteGray from './svg-sources/site-gray.svg';
import SiteRed from './svg-sources/site-red.svg';
import SiteWhite from './svg-sources/site-white.svg';
import { DiColors } from './colors';

export function DiSite(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Site = SiteDark;
  if (color) {
    switch (color) {
      case 'blue':
        Site = SiteBlue;
        break;
      case 'gray':
        Site = SiteGray;
        break;
      case 'red':
        Site = SiteRed;
        break;
      case 'white':
        Site = SiteWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Site />
    </SvgIcon>
  );
}
