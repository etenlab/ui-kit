import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import DownloadBlue from './svg-sources/download-blue.svg';
import DownloadDark from './svg-sources/download-dark.svg';
import DownloadGray from './svg-sources/download-gray.svg';
import DownloadRed from './svg-sources/download-red.svg';
import DownloadWhite from './svg-sources/download-white.svg';
import { DiColors } from './colors';

export function DiDownload(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Download = DownloadDark;
  if (color) {
    switch (color) {
      case 'blue':
        Download = DownloadBlue;
        break;
      case 'gray':
        Download = DownloadGray;
        break;
      case 'red':
        Download = DownloadRed;
        break;
      case 'white':
        Download = DownloadWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Download />
    </SvgIcon>
  );
}
