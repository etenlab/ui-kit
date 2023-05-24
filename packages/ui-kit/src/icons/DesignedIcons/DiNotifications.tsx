import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import NotificationsBlue from './svg-sources/notifications-blue.svg';
import NotificationsDark from './svg-sources/notifications-dark.svg';
import NotificationsGray from './svg-sources/notifications-gray.svg';
import NotificationsRed from './svg-sources/notifications-red.svg';
import NotificationsWhite from './svg-sources/notifications-white.svg';
import { DiColors } from './colors';

export function DiNotifications(
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) {
  const { color, ...rest } = props;
  let Notifications = NotificationsDark;
  if (color) {
    switch (color) {
      case 'blue':
        Notifications = NotificationsBlue;
        break;
      case 'gray':
        Notifications = NotificationsGray;
        break;
      case 'red':
        Notifications = NotificationsRed;
        break;
      case 'white':
        Notifications = NotificationsWhite;
        break;
      default:
        break;
    }
  }
  return (
    <SvgIcon {...rest}>
      <Notifications />
    </SvgIcon>
  );
}
