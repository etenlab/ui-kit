import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import PhraseBlue from './svg-sources/phrase-blue.svg';
import PhraseDark from './svg-sources/phrase-dark.svg';
import PhraseGray from './svg-sources/phrase-gray.svg';
import PhraseRed from './svg-sources/phrase-red.svg';
import PhraseWhite from './svg-sources/phrase-white.svg';
import { DiColors } from './colors';

export function DiPhrase(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Phrase = PhraseDark;
  if (color) {
    switch (color) {
      case 'blue':
        Phrase = PhraseBlue;
        break;
      case 'gray':
        Phrase = PhraseGray;
        break;
      case 'red':
        Phrase = PhraseRed;
        break;
      case 'white':
        Phrase = PhraseWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Phrase />
    </SvgIcon>
  );
}
