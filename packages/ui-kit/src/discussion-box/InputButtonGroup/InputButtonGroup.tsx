import React from 'react';

import { IconButton, Stack, Divider } from '@mui/material';

import { TbLetterT, FiMic, TbVideoPlus } from '../../icons';
import { colors } from '../../ThemeProvider';

interface InputButtonGroupProps {
  onClick(inputType: 'quill' | 'video' | 'audio'): void;
}

export function InputButtonGroup({ onClick }: InputButtonGroupProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        padding: '10px',
        borderRadius: '36px',
        background: colors['light-blue'],
      }}
    >
      <IconButton onClick={() => onClick('quill')}>
        <TbLetterT style={{ fontSize: '24px' }} />
      </IconButton>
      <Divider orientation="vertical" flexItem />
      <IconButton onClick={() => onClick('audio')}>
        <FiMic style={{ fontSize: '24px' }} />
      </IconButton>
      <Divider orientation="vertical" flexItem />
      <IconButton onClick={() => onClick('video')}>
        <TbVideoPlus style={{ fontSize: '24px' }} />
      </IconButton>
    </Stack>
  );
}
