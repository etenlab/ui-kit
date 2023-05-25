import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import TimerBlue from './svg-sources/timer-blue.svg';
import TimerDark from './svg-sources/timer-dark.svg';
import TimerGray from './svg-sources/timer-gray.svg';
import TimerRed from './svg-sources/timer-red.svg';
import TimerWhite from './svg-sources/timer-white.svg';
import { DiColors } from './colors';

export function DiTimer(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Timer = TimerDark;
  if (color) {
    switch (color) {
      case 'blue':
        Timer = TimerBlue;
        break;
      case 'gray':
        Timer = TimerGray;
        break;
      case 'red':
        Timer = TimerRed;
        break;
      case 'white':
        Timer = TimerWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Timer />
    </SvgIcon>
  );
}
