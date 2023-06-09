import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import DictionaryBlue from './svg-sources/dictionary-blue.svg';
import DictionaryDark from './svg-sources/dictionary-dark.svg';
import DictionaryGray from './svg-sources/dictionary-gray.svg';
import DictionaryRed from './svg-sources/dictionary-red.svg';
import DictionaryWhite from './svg-sources/dictionary-white.svg';
import { DiColors } from './colors';

export function DiDictionary(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Dictionary = DictionaryDark;
  if (color) {
    switch (color) {
      case 'blue':
        Dictionary = DictionaryBlue;
        break;
      case 'gray':
        Dictionary = DictionaryGray;
        break;
      case 'red':
        Dictionary = DictionaryRed;
        break;
      case 'white':
        Dictionary = DictionaryWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Dictionary />
    </SvgIcon>
  );
}
