import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import CameraBlue from './svg-sources/camera-blue.svg';
import CameraDark from './svg-sources/camera-dark.svg';
import CameraGray from './svg-sources/camera-gray.svg';
import CameraRed from './svg-sources/camera-red.svg';
import CameraWhite from './svg-sources/camera-white.svg';
import { DiColors } from './colors';

export function DiCamera(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Camera = CameraDark;
  if (color) {
    switch (color) {
      case 'blue':
        Camera = CameraBlue;
        break;
      case 'gray':
        Camera = CameraGray;
        break;
      case 'red':
        Camera = CameraRed;
        break;
      case 'white':
        Camera = CameraWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Camera />
    </SvgIcon>
  );
}
