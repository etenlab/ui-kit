import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import LinkBlue from './svg-sources/link-blue.svg';
import LinkDark from './svg-sources/link-dark.svg';
import LinkGray from './svg-sources/link-gray.svg';
import LinkRed from './svg-sources/link-red.svg';
import LinkWhite from './svg-sources/link-white.svg';
import { DiColors } from './colors';

export function DiLink(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Link = LinkDark;
  if (color) {
    switch (color) {
      case 'blue':
        Link = LinkBlue;
        break;
      case 'gray':
        Link = LinkGray;
        break;
      case 'red':
        Link = LinkRed;
        break;
      case 'white':
        Link = LinkWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Link />
    </SvgIcon>
  );
}
