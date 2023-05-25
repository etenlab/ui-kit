import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import CodeBlue from './svg-sources/code-blue.svg';
import CodeDark from './svg-sources/code-dark.svg';
import CodeGray from './svg-sources/code-gray.svg';
import CodeRed from './svg-sources/code-red.svg';
import CodeWhite from './svg-sources/code-white.svg';
import { DiColors } from './colors';

export function DiCode(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Code = CodeDark;
  if (color) {
    switch (color) {
      case 'blue':
        Code = CodeBlue;
        break;
      case 'gray':
        Code = CodeGray;
        break;
      case 'red':
        Code = CodeRed;
        break;
      case 'white':
        Code = CodeWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Code />
    </SvgIcon>
  );
}
