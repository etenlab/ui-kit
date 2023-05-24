import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import TranslatorBlue from './svg-sources/translator-blue.svg';
import TranslatorDark from './svg-sources/translator-dark.svg';
import TranslatorGray from './svg-sources/translator-gray.svg';
import TranslatorRed from './svg-sources/translator-red.svg';
import TranslatorWhite from './svg-sources/translator-white.svg';
import { DiColors } from './colors';

export function DiTranslator(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Translator = TranslatorDark;
  if (color) {
    switch (color) {
      case 'blue':
        Translator = TranslatorBlue;
        break;
      case 'gray':
        Translator = TranslatorGray;
        break;
      case 'red':
        Translator = TranslatorRed;
        break;
      case 'white':
        Translator = TranslatorWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Translator />
    </SvgIcon>
  );
}
