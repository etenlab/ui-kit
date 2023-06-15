import React from 'react';

import { IconButton, Stack, Divider } from '@mui/material';

import { DiText, DiMicro, DiCamera } from '../../icons';
import { useColorModeContext } from '../../ThemeProvider';

interface InputButtonGroupProps {
  onClick(inputType: 'quill' | 'video' | 'audio'): void;
}

export function InputButtonGroup({ onClick }: InputButtonGroupProps) {
  const { getColor } = useColorModeContext();

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        padding: '10px',
        borderRadius: '36px',
        background: getColor('light-blue'),
      }}
    >
      <IconButton onClick={() => onClick('quill')}>
        <DiText style={{ fontSize: '24px' }} />
      </IconButton>
      <Divider orientation="vertical" flexItem />
      <IconButton onClick={() => onClick('audio')}>
        <DiMicro style={{ fontSize: '24px' }} />
      </IconButton>
      <Divider orientation="vertical" flexItem />
      <IconButton onClick={() => onClick('video')}>
        <DiCamera style={{ fontSize: '24px' }} />
      </IconButton>
    </Stack>
  );
}
