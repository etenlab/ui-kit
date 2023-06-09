import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import LevelsBlue from './svg-sources/levels-blue.svg';
import LevelsDark from './svg-sources/levels-dark.svg';
import LevelsGray from './svg-sources/levels-gray.svg';
import LevelsRed from './svg-sources/levels-red.svg';
import LevelsWhite from './svg-sources/levels-white.svg';
import { DiColors } from './colors';

export function DiLevels(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Levels = LevelsDark;
  if (color) {
    switch (color) {
      case 'blue':
        Levels = LevelsBlue;
        break;
      case 'gray':
        Levels = LevelsGray;
        break;
      case 'red':
        Levels = LevelsRed;
        break;
      case 'white':
        Levels = LevelsWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Levels />
    </SvgIcon>
  );
}
