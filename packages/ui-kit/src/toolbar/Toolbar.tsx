import React from 'react';

import { IconButton, Stack, Typography, Badge } from '@mui/material';
import { BiMessageRounded, FiBell, FiMenu, CiDark, CiLight } from '../icons';
import { useColorModeContext } from '../ThemeProvider';

type ToolbarProps = {
  title: string;
  isNewDiscussion?: boolean;
  isNewNotification?: boolean;
  buttons?: {
    discussion: boolean;
    notification: boolean;
    menu: boolean;
  };
  themeMode: 'dark' | 'light';
  onClickDiscussionBtn(): void;
  onClickNotificationBtn(): void;
  onClickThemeModeBtn(): void;
  onClickMenuBtn(): void;
};

export function Toolbar({
  title,
  isNewDiscussion,
  isNewNotification,
  buttons = {
    discussion: true,
    notification: true,
    menu: true,
  },
  themeMode = 'light',
  onClickThemeModeBtn,
  onClickDiscussionBtn,
  onClickNotificationBtn,
  onClickMenuBtn,
}: ToolbarProps) {
  const { getColor } = useColorModeContext();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: '3px 20px' }}
    >
      <Typography variant="h3" color="text.dark" sx={{ lineHeight: '56px' }}>
        {title}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="4px"
      >
        {buttons.discussion ? (
          <IconButton onClick={onClickDiscussionBtn}>
            <Badge color="red" variant="dot" invisible={!isNewDiscussion}>
              <BiMessageRounded
                style={{
                  color: getColor('gray'),
                  fontSize: 24,
                  transform: 'rotateY(180deg)',
                }}
              />
            </Badge>
          </IconButton>
        ) : null}
        {buttons.notification ? (
          <IconButton onClick={onClickNotificationBtn}>
            <Badge color="red" variant="dot" invisible={!isNewNotification}>
              <FiBell style={{ color: getColor('gray'), fontSize: 24 }} />
            </Badge>
          </IconButton>
        ) : null}

        <IconButton onClick={onClickThemeModeBtn}>
          {themeMode === 'light' ? (
            <CiLight
              style={{
                color: getColor('gray'),
                fontSize: 27,
                strokeWidth: '0.6px',
              }}
            />
          ) : (
            <CiDark
              style={{
                color: getColor('gray'),
                fontSize: 27,
                strokeWidth: '0.6px',
              }}
            />
          )}
        </IconButton>

        {buttons.menu ? (
          <IconButton onClick={onClickMenuBtn}>
            <FiMenu style={{ color: getColor('gray'), fontSize: '40px' }} />
          </IconButton>
        ) : null}
      </Stack>
    </Stack>
  );
}
