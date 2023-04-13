import { Stack } from '@mui/material';
import React from 'react';
import { BackButton, BackBtnProps } from '../BackButton';
import ActionButtons, { ActionButtonProps } from './ActionButtons';
import PageTitleTypo from '../styleds/PageTitleTypo';

export type EntryDetailTopControlProps = {
  title?: string;
  actionBtnsProps?: ActionButtonProps;
  backBtnProps?: BackBtnProps;
};
export const MOCK_ENTRY_DETAIL_TOP_CONTROL_PROPS = {
  title: 'Bible in Basic English',
};
export default function TopControls(props: EntryDetailTopControlProps) {
  return (
    <Stack
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'center'}
    >
      <BackButton {...props.backBtnProps} />
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
          {props.title}
        </PageTitleTypo>
        <Stack flex={1}>
          <ActionButtons {...props.actionBtnsProps} />
        </Stack>
      </Stack>
    </Stack>
  );
}
