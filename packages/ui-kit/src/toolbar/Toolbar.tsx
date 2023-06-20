import React from 'react';

import { IconButton, Button, Stack, Typography, Badge } from '@mui/material';
import {
  DiMessages,
  DiNotifications,
  DiMenu,
  CiDark,
  CiLight,
  DiTranslate,
} from '../icons';
import { useColorModeContext } from '../ThemeProvider';

type ToolbarProps = {
  title: string;
  isNewDiscussion?: boolean;
  isNewNotification?: boolean;
  buttons?: {
    discussion: boolean;
    notification: boolean;
    language: boolean;
    menu: boolean;
  };
  themeMode: 'dark' | 'light';
  onClickTitleBtn?: () => void;
  onClickDiscussionBtn(): void;
  onClickNotificationBtn(): void;
  onClickLanguageBtn(): void;
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
    language: true,
    menu: true,
  },
  themeMode = 'light',
  onClickTitleBtn,
  onClickDiscussionBtn,
  onClickNotificationBtn,
  onClickLanguageBtn,
  onClickThemeModeBtn,
  onClickMenuBtn,
}: ToolbarProps) {
  const { getColor } = useColorModeContext();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: '3px 20px',
        borderBottom: `1px solid ${getColor('divider-color')}`,
        height: '61px',
      }}
    >
      <Button variant="text" onClick={onClickTitleBtn}>
        <Typography
          variant="h3"
          color="text.dark"
          sx={{ textTransform: 'none' }}
        >
          {title}
        </Typography>
      </Button>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="6px"
      >
        {buttons.discussion ? (
          <IconButton
            onClick={onClickDiscussionBtn}
            sx={{ padding: '5px' }}
            id="discussion-list-toggle-button"
          >
            <Badge color="red" variant="dot" invisible={!isNewDiscussion}>
              <DiMessages
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
          <IconButton
            onClick={onClickNotificationBtn}
            sx={{ padding: '5px' }}
            id="language-toggle-button"
          >
            <Badge color="red" variant="dot" invisible={!isNewNotification}>
              <DiNotifications
                style={{ color: getColor('gray'), fontSize: 24 }}
              />
            </Badge>
          </IconButton>
        ) : null}
        {buttons.language ? (
          <IconButton
            onClick={onClickLanguageBtn}
            sx={{
              padding: '5px',
              '& g': {
                stroke: getColor('gray'),
              },
            }}
            id="notification-toggle-button"
          >
            <DiTranslate />
          </IconButton>
        ) : null}

        <IconButton
          onClick={onClickThemeModeBtn}
          sx={{ padding: '3px' }}
          id="light-dark-toggle-button"
        >
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
          <IconButton
            onClick={onClickMenuBtn}
            sx={{ padding: '2px' }}
            id="app-menu-toggle-button"
          >
            <DiMenu style={{ color: getColor('gray'), fontSize: '30px' }} />
          </IconButton>
        ) : null}
      </Stack>
    </Stack>
  );
}
