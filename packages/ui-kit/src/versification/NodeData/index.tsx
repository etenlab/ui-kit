import React from 'react';

import { Box } from '@mui/material';

import { BiLike, BiDislike, BiMessageRounded } from '../../icons';
import { IconBadge } from '../IconBadge';

export function NodeData({
  col = false,
  inline = false,
  label,
  numUpVotes,
  numDownVotes,
  numPosts,
}: {
  col?: boolean;
  inline?: boolean;
  label?: string;
  numUpVotes: number;
  numDownVotes: number;
  numPosts: number;
}) {
  return (
    <Box
      sx={{
        display: `${inline ? 'inline-' : ''}flex`,
        alignItems: 'center',
        justifyContent: 'space-between',
        lineHeight: 'initial',
        ...(col && {
          flexDirection: 'column',
          alignItems: 'start',
        }),
      }}
    >
      {label && (
        <Box
          component="strong"
          sx={{
            whiteSpace: 'nowrap',
            margin: !col ? '0 20px 0 0' : '0 0 8px',
          }}
        >
          {label}
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <IconBadge Icon={BiLike} value={numUpVotes} success />
        <IconBadge Icon={BiDislike} value={numDownVotes} danger />
        <IconBadge Icon={BiMessageRounded} value={numPosts} />
      </Box>
    </Box>
  );
}
