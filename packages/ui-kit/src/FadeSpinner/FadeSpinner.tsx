import { Stack, Typography } from '@mui/material';
import React from 'react';

import { FadeLoader } from 'react-spinners';

export const FadeSpinner = ({
  color,
  progress,
}: {
  color: string;
  progress: number;
}) => {
  return (
    <Stack direction="column" alignItems="center" sx={{ gap: '20px' }}>
      <FadeLoader
        color={color}
        aria-label="Loading Spinner"
        data-testid="loader"
      ></FadeLoader>
      <Typography variant="body1">{progress}% Loading...</Typography>
    </Stack>
  );
};
