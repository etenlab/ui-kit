import React from 'react';

import { Box, BoxProps } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';

export function Content(props: BoxProps) {
  const { getColor } = useColorModeContext();

  return (
    <Box
      sx={{
        p: '20px 10px',
        lineHeight: 1.43,
        color: getColor('dark'),
        fontSize: '14px',
      }}
      {...props}
    />
  );
}
