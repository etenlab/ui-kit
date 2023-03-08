import React from 'react';

import { Box, Typography, IconButton } from '@mui/material';

import { BiLeftArrowAlt } from '../../icons';

export function HeadingBox({
  onBack,
  breadcrumb,
}: {
  onBack?(): void;
  breadcrumb?: string;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#e3eaf3',
        minHeight: 68,
        py: 1,
        px: 2.5,
        color: '#1b1b1b',
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
          >
            <BiLeftArrowAlt />
          </IconButton>
        )}
        <span>Versification{breadcrumb ? ` / ${breadcrumb}` : ''}</span>
      </Typography>
    </Box>
  );
}
