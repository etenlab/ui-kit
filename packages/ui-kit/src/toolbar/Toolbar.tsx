import React from 'react';

import { IconButton, Stack, Typography, Badge } from '@mui/material';
import { BiMessageRounded, FiBell, FiMenu } from '../icons';

type ToolbarProps = {
  title: string;
  isNewDiscussion?: boolean;
  isNewNotification?: boolean;
  buttons?: {
    discussion: boolean;
    notification: boolean;
    menu: boolean;
  };
  onClickDiscussionBtn(): void;
  onClickNotificationBtn(): void;
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
  onClickDiscussionBtn,
  onClickNotificationBtn,
  onClickMenuBtn,
}: ToolbarProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: '3px 20px' }}
    >
      <Typography variant="h3" sx={{ lineHeight: '56px', color: '#1B1B1B' }}>
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
                  color: '#5C6673',
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
              <FiBell style={{ color: '#5C6673', fontSize: 24 }} />
            </Badge>
          </IconButton>
        ) : null}
        {buttons.menu ? (
          <IconButton onClick={onClickMenuBtn}>
            <FiMenu style={{ color: '#5C6673', fontSize: '40px' }} />
          </IconButton>
        ) : null}
      </Stack>
    </Stack>
  );
}
