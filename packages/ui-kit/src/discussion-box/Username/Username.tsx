import React from 'react';

import { Typography } from '@mui/material';
import { colors } from '../../ThemeProvider';

/**
 * Primary UI for username ex: '@username'
 */
export function Username({ username }: { username: string }) {
  const transformUsername = `@${username}`;

  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontSize: '14px',
        lineHeight: '20px',
        color: colors['dark'],
      }}
    >
      {transformUsername}
    </Typography>
  );
}
