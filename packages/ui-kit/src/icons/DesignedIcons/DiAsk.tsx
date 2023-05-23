import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as AskBlue } from './svg-sources/ask-blue.svg';
import { ReactComponent as AskDark } from './svg-sources/ask-dark.svg';
import { ReactComponent as AskGray } from './svg-sources/ask-gray.svg';
import { ReactComponent as AskRed } from './svg-sources/ask-red.svg';
import { ReactComponent as AskWhite } from './svg-sources/ask-white.svg';
import { DiColors } from './colors';

export function DiAsk(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Ask = AskDark;
  if (color) {
    switch (color) {
      case 'blue':
        Ask = AskBlue;
        break;
      case 'gray':
        Ask = AskGray;
        break;
      case 'red':
        Ask = AskRed;
        break;
      case 'white':
        Ask = AskWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Ask />
    </SvgIcon>
  );
}
