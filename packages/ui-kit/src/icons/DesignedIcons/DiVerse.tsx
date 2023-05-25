import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import VerseBlue from './svg-sources/verse-blue.svg';
import VerseDark from './svg-sources/verse-dark.svg';
import VerseGray from './svg-sources/verse-gray.svg';
import VerseRed from './svg-sources/verse-red.svg';
import VerseWhite from './svg-sources/verse-white.svg';
import { DiColors } from './colors';

export function DiVerse(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Verse = VerseDark;
  if (color) {
    switch (color) {
      case 'blue':
        Verse = VerseBlue;
        break;
      case 'gray':
        Verse = VerseGray;
        break;
      case 'red':
        Verse = VerseRed;
        break;
      case 'white':
        Verse = VerseWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Verse />
    </SvgIcon>
  );
}
