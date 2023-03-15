import React from 'react';

import { Box } from '@mui/material';

import { BiLike, BiDislike, BiMessageRounded } from '../../icons';
import { NewIdentifierBoxProps } from '../NewIdentifierBox';
import { IdentifierLabel } from '../IdentifierLabel';
import { IconBadge } from '../IconBadge';

export function NodeData({
  col = false,
  inline = false,
  label,
  nodeType,
  originalValue,
  translationValues,
  numUpVotes,
  numDownVotes,
  numPosts,
  onNewIdentifierSave,
}: Pick<
  NewIdentifierBoxProps,
  'nodeType' | 'originalValue' | 'translationValues'
> & {
  col?: boolean;
  inline?: boolean;
  label: string;
  numUpVotes: number;
  numDownVotes: number;
  numPosts: number;
  onNewIdentifierSave(value: string): void;
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
      <IdentifierLabel
        nodeType={nodeType}
        originalValue={originalValue}
        translationValues={translationValues}
        onNewIdentifierSave={onNewIdentifierSave}
        value={label}
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
        <IconBadge Icon={BiMessageRounded} value={numPosts} />
      </Box>
    </Box>
  );
}
