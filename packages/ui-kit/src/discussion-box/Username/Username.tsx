import React from 'react';

import { Typography } from '@mui/material';

/**
 * Primary UI for username ex: '@username'
 */
export function Username({ username }: { username: string }) {
  const transformUsername = `@${username}`;

  return (
    <Typography
      variant="h3"
      component="h3"
      color="text.dark"
      sx={{
        fontSize: '14px',
        lineHeight: '20px',
        flexShrink: 0,
      }}
    >
      {transformUsername}
    </Typography>
  );
}
