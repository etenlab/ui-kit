import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import ChooseBlue from './svg-sources/choose-blue.svg';
import ChooseDark from './svg-sources/choose-dark.svg';
import ChooseGray from './svg-sources/choose-gray.svg';
import ChooseRed from './svg-sources/choose-red.svg';
import ChooseWhite from './svg-sources/choose-white.svg';
import { DiColors } from './colors';

export function DiChoose(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Choose = ChooseDark;
  if (color) {
    switch (color) {
      case 'blue':
        Choose = ChooseBlue;
        break;
      case 'gray':
        Choose = ChooseGray;
        break;
      case 'red':
        Choose = ChooseRed;
        break;
      case 'white':
        Choose = ChooseWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Choose />
    </SvgIcon>
  );
}
