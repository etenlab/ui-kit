import React from 'react';

import { Box, BoxProps } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';

export function Header({ sx = [], ...restProps }: BoxProps) {
  const { getColor } = useColorModeContext();

  return (
    <Box
      {...restProps}
      sx={[
        {
          backgroundColor: getColor('light-blue'),
          color: getColor('gray'),
          p: '12.5px 9px',
          lineHeight: 1,
          fontSize: '14px',
          fontWeight: 700,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
