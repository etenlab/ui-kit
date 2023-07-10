import React from 'react';

import { Stack, Avatar, Typography } from '@mui/material';

import { DiReply } from '../../icons';
import { useColorModeContext } from '../../ThemeProvider';

export function DeletedDecorator() {
  const { getColor } = useColorModeContext();
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
          bgcolor: getColor('dark'),
          color: getColor('white'),
          height: 25,
          width: 25,
        }}
      >
        <DiReply style={{ fontSize: '17px' }} />
      </Avatar>
      <Typography
        variant="body3"
        color="text.gray"
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
          stroke={getColor('gray')}
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 5 0 l 22 0"
          stroke={getColor('gray')}
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 0 5 q 0 -5 5 -5"
          stroke={getColor('gray')}
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </Stack>
  );
}
