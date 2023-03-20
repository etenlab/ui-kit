import React, { ReactNode } from 'react';

import { Box, Typography, IconButton } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';
import { BiLeftArrowAlt } from '../../icons';

export function HeadingBox({
  onBack,
  breadcrumb,
  children,
}: {
  onBack?(): void;
  breadcrumb?: string;
  children?: ReactNode;
}) {
  const { getColor } = useColorModeContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: getColor('light-blue'),
        minHeight: 68,
        p: 2.5,
        color: getColor('dark'),
      }}
    >
      <Typography variant="h3" sx={{ fontSize: 20, color: 'inherit' }}>
        {onBack && (
          <IconButton
            size="small"
            sx={{
              color: 'inherit',
              fontSize: 30,
              p: 0,
              mr: 1,
            }}
            onClick={onBack}
          >
            <BiLeftArrowAlt />
          </IconButton>
        )}
        <span>Versification{breadcrumb ? ` / ${breadcrumb}` : ''}</span>
      </Typography>
      {children}
    </Box>
  );
}
