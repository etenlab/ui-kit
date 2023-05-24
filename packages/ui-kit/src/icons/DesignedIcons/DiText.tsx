import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import TextBlue from './svg-sources/text-blue.svg';
import TextDark from './svg-sources/text-dark.svg';
import TextGray from './svg-sources/text-gray.svg';
import TextRed from './svg-sources/text-red.svg';
import TextWhite from './svg-sources/text-white.svg';
import { DiColors } from './colors';

export function DiText(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Text = TextDark;
  if (color) {
    switch (color) {
      case 'blue':
        Text = TextBlue;
        break;
      case 'gray':
        Text = TextGray;
        break;
      case 'red':
        Text = TextRed;
        break;
      case 'white':
        Text = TextWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Text />
    </SvgIcon>
  );
}
