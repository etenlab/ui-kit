import React from 'react';

import { Stack, IconButton, Typography, PaletteColor } from '@mui/material';

import { DiCross, DiArrowLeft } from '../../icons';

type TitleWithIconProps = {
  label: string;
  withBackIcon?: boolean;
  withCloseIcon?: boolean;
  onClose(): void;
  onBack(): void;
};

export function TitleWithIcon({
  label,
  withBackIcon = false,
  withCloseIcon = true,
  onClose,
  onBack,
}: TitleWithIconProps) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h3" color="text.dark">
        {withBackIcon ? (
          <IconButton
            onClick={onBack}
            sx={{
              color: (theme) => (theme.palette.dark as PaletteColor).main,
            }}
          >
            <DiArrowLeft />
          </IconButton>
        ) : null}

        {label}
      </Typography>

      {withCloseIcon ? (
        <IconButton
          onClick={onClose}
          sx={{ color: (theme) => (theme.palette.gray as PaletteColor).main }}
        >
          <DiCross />
        </IconButton>
      ) : null}
    </Stack>
  );
}
