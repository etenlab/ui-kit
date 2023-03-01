import React from 'react';

import { Stack, Typography } from '@mui/material';

import { Avatar } from '../Avatar';
import { Username } from '../Username';
import { BiImages } from '../../icons';
import { colors } from '../../ThemeProvider';

type IFile = {
  id: number;
};

export type StandardDecoratorProps = {
  url: string;
  username: string;
  plainText: string;
  files: IFile[];
  edited: boolean;
};

export function StandardDecorator({
  url,
  username,
  plainText,
  files,
  edited,
}: StandardDecoratorProps) {
  const attachmentIcon =
    files.length > 0 ? <BiImages style={{ color: colors['gray'] }} /> : null;

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
      <Avatar username={username} url={url} mini={true} />
      <Username username={username} />
      <Typography
        variant="body3"
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {plainText}
        {edited ? '(edited)' : ''}
      </Typography>

      {attachmentIcon}

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
