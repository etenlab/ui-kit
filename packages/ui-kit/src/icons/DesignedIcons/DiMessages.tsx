import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import MessagesBlue from './svg-sources/messages-blue.svg';
import MessagesDark from './svg-sources/messages-dark.svg';
import MessagesGray from './svg-sources/messages-gray.svg';
import MessagesRed from './svg-sources/messages-red.svg';
import MessagesWhite from './svg-sources/messages-white.svg';
import { DiColors } from './colors';

export function DiMessages(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Messages = MessagesDark;
  if (color) {
    switch (color) {
      case 'blue':
        Messages = MessagesBlue;
        break;
      case 'gray':
        Messages = MessagesGray;
        break;
      case 'red':
        Messages = MessagesRed;
        break;
      case 'white':
        Messages = MessagesWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Messages />
    </SvgIcon>
  );
}
