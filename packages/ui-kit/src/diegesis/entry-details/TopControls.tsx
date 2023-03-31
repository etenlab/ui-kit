import { Stack, Typography } from '@mui/material';
import React from 'react';
import { BackButton } from '../BackButton';
import ActionButtons from './ActionButtons';

type Props = {};
export default function TopControls(props: Props) {
  return (
    <Stack
      direction={'column'}
      alignItems={'flex-start'}
      justifyContent={'center'}
      className="top-controls-section"
    >
      <BackButton />
      <Stack
        direction={'row'}
        className="mt-1 full-width"
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant={'h1'} className="page-title mr-2 full-width">
          Bible in Basic English
        </Typography>
        <ActionButtons />
      </Stack>
    </Stack>
  );
}
