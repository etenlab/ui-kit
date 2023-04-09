import { Stack } from '@mui/material';
import React from 'react';
import { BackButton } from '../BackButton';
import ActionButtons from './ActionButtons';
import PageTitleTypo from '../styleds/PageTitleTypo';

type Props = {};
export default function TopControls(_props: Props) {
  return (
    <Stack
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'center'}
    >
      <BackButton />
      <Stack
        flexDirection={'row'}
        marginTop={'0.8rem'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={(theme) => ({
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            '.MuiButton-containedGreen': {
              fontSize: '1rem',
              width: '47% !important',
            },
          },
        })}
      >
        <PageTitleTypo variant="h1" marginRight={'0.5rem'} flex={2}>
          Bible in Basic English
        </PageTitleTypo>
        <Stack flex={1}>
          <ActionButtons />
        </Stack>
      </Stack>
    </Stack>
  );
}
