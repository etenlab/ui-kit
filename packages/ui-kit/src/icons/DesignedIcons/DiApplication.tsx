import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ApplicationBlue from './svg-sources/application-blue.svg';
import ApplicationDark from './svg-sources/application-dark.svg';
import ApplicationGray from './svg-sources/application-gray.svg';
import ApplicationRed from './svg-sources/application-red.svg';
import ApplicationWhite from './svg-sources/application-white.svg';
import { DiColors } from './colors';

export function DiApplication(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Application = ApplicationDark;
  if (color) {
    switch (color) {
      case 'blue':
        Application = ApplicationBlue;
        break;
      case 'gray':
        Application = ApplicationGray;
        break;
      case 'red':
        Application = ApplicationRed;
        break;
      case 'white':
        Application = ApplicationWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Application />
    </SvgIcon>
  );
}
