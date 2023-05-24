import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import TranslateBlue from './svg-sources/translate-blue.svg';
import TranslateDark from './svg-sources/translate-dark.svg';
import TranslateGray from './svg-sources/translate-gray.svg';
import TranslateRed from './svg-sources/translate-red.svg';
import TranslateWhite from './svg-sources/translate-white.svg';
import { DiColors } from './colors';

export function DiTranslate(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Translate = TranslateDark;
  if (color) {
    switch (color) {
      case 'blue':
        Translate = TranslateBlue;
        break;
      case 'gray':
        Translate = TranslateGray;
        break;
      case 'red':
        Translate = TranslateRed;
        break;
      case 'white':
        Translate = TranslateWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Translate />
    </SvgIcon>
  );
}
