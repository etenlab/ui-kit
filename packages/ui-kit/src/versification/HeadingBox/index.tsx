import React, { ReactNode } from 'react';

import { Box, Typography, IconButton } from '@mui/material';

import { colors } from '../../ThemeProvider/palette';
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
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors['light-blue'],
        minHeight: 68,
        p: 2.5,
        color: colors.dark,
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
