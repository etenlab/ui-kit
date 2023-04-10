import { Button, Stack } from '@mui/material';
import React from 'react';
import { AiOutlineDownload, AiOutlineFileText } from 'react-icons/ai';

type Props = {};
export default function ActionButtons(_props: Props) {
  return (
    <Stack
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'flex-end'}
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          marginTop: '1rem',
          marginBottom: '1rem',
          justifyContent: 'space-between',
        },
      })}
    >
      <Button
        sx={{
          fontWeight: 700,
          fontSize: '1.3rem',
          textTransform: 'none',
          borderRadius: '2rem',
          padding: '0.8rem',
          width: '47%',
          marginRight: '1rem',
        }}
        startIcon={<AiOutlineFileText />}
        variant={'contained'}
        color={'green'}
        size={'large'}
      >
        View
      </Button>
      <Button
        sx={{
          fontWeight: 700,
          fontSize: '1.3rem',
          textTransform: 'none',
          borderRadius: '2rem',
          padding: '0.8rem',
          width: '47%',
        }}
        startIcon={<AiOutlineDownload />}
        variant={'contained'}
        color={'green'}
        size={'large'}
      >
        Download
      </Button>
    </Stack>
  );
}
