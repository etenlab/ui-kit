import React from 'react';

import { Stack, Avatar, Typography } from '@mui/material';

import { BiShare } from '../../icons';
import { colors } from '../../ThemeProvider';

export function DeletedDecorator() {
  return (
    <Stack
      direction="row"
      gap="10px"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        position: 'relative',
        top: '10px',
        paddingLeft: '45px',
      }}
    >
      <Avatar
        sx={{
          bgcolor: colors['dark'],
          color: colors['white'],
          height: 25,
          width: 25,
        }}
      >
        <BiShare style={{ fontSize: '17px' }} />
      </Avatar>
      <Typography
        variant="body3"
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <i>Original message was deleted.</i>
      </Typography>
      <svg
        height="30px"
        width="50px"
        style={{ position: 'absolute', top: '10px', left: '16px' }}
      >
        <path
          d="M 0 5 l 0 10"
          stroke={colors['gray']}
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 5 0 l 22 0"
          stroke={colors['gray']}
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 0 5 q 0 -5 5 -5"
          stroke={colors['gray']}
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </Stack>
  );
}
