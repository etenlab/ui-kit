import { Stack } from '@mui/material';
import React from 'react';
import { FC } from 'react';
import ActionButtons, { ActionButtonProps } from './ActionButtons';

export const BottomActionBtns: FC<ActionButtonProps> = (props) => {
  return (
    <Stack
      flexDirection={'row'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'flex-end'}
      sx={(theme) => ({
        marginTop: '50px',
        marginBottom: '50px',
        [theme.breakpoints.down('sm')]: {
          marginTop: '20px',
          marginBottom: '20px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          '.MuiButton-containedGreen': {
            fontSize: '1rem',
            width: '47% !important',
          },
        },
      })}
    >
      <Stack flex={2}></Stack>
      <Stack
        flex={1}
        sx={(theme) => ({
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        })}
      >
        <ActionButtons {...props} />
      </Stack>
    </Stack>
  );
};
export default BottomActionBtns;
