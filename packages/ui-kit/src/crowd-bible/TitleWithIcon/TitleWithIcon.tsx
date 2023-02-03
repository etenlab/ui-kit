import React from 'react';

import { Stack, IconButton, Typography, PaletteColor } from '@mui/material';

import { FiX, BiLeftArrowAlt } from '../../icons';

type TitleWithIconProps = {
  label: string;
  withBackIcon?: React.ReactNode;
  onClose(): void;
  onBack(): void;
};

export function TitleWithIcon({
  label,
  withBackIcon = false,
  onClose,
  onBack,
}: TitleWithIconProps) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography
        variant="h3"
        sx={{
          color: (theme) => (theme.palette.dark as PaletteColor).main,
        }}
      >
        {withBackIcon ? (
          <IconButton
            onClick={onBack}
            sx={{
              color: (theme) => (theme.palette.dark as PaletteColor).main,
            }}
          >
            <BiLeftArrowAlt />
          </IconButton>
        ) : null}

        {label}
      </Typography>

      <IconButton
        onClick={onClose}
        sx={{ color: (theme) => (theme.palette.gray as PaletteColor).main }}
      >
        <FiX />
      </IconButton>
    </Stack>
  );
}
