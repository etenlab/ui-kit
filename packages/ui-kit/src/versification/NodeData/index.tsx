import React from 'react';

import { SxProps, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

import { BiLike, BiDislike, DiMessages } from '../../icons';
import { IdentifierLabelProps, IdentifierLabel } from '../IdentifierLabel';
import { IconBadge } from '../IconBadge';

export function NodeData({
  col = false,
  inline = false,
  currentValue,
  short,
  nodeType,
  originalValue,
  translationValues,
  numUpVotes,
  numDownVotes,
  numPosts,
  onNewIdentifierSave,
  sx = [],
}: Pick<
  IdentifierLabelProps,
  | 'currentValue'
  | 'short'
  | 'nodeType'
  | 'originalValue'
  | 'translationValues'
  | 'onNewIdentifierSave'
> & {
  col?: boolean;
  inline?: boolean;
  numUpVotes: number;
  numDownVotes: number;
  numPosts: number;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      sx={[
        {
          display: `${inline ? 'inline-' : ''}flex`,
          alignItems: 'center',
          justifyContent: 'space-between',
          lineHeight: 'initial',
          ...(col && {
            flexDirection: 'column',
            alignItems: 'start',
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <IdentifierLabel
        nodeType={nodeType}
        originalValue={originalValue}
        translationValues={translationValues}
        onNewIdentifierSave={onNewIdentifierSave}
        currentValue={currentValue}
        short={short}
        sx={{ margin: !col ? '0 20px 0 0' : '0 0 8px' }}
      />
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
        <IconBadge Icon={DiMessages} value={numPosts} />
      </Box>
    </Box>
  );
}
