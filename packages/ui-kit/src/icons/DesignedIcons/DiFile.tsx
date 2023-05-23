import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as FileBlue } from './svg-sources/file-blue.svg';
import { ReactComponent as FileDark } from './svg-sources/file-dark.svg';
import { ReactComponent as FileGray } from './svg-sources/file-gray.svg';
import { ReactComponent as FileRed } from './svg-sources/file-red.svg';
import { ReactComponent as FileWhite } from './svg-sources/file-white.svg';
import { DiColors } from './colors';

export function DiFile(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let File = FileDark;
  if (color) {
    switch (color) {
      case 'blue':
        File = FileBlue;
        break;
      case 'gray':
        File = FileGray;
        break;
      case 'red':
        File = FileRed;
        break;
      case 'white':
        File = FileWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <File />
    </SvgIcon>
  );
}
