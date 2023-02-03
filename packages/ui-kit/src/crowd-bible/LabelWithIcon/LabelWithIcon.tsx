import React from 'react';

import { Stack, IconButton, Typography, PaletteColor } from '@mui/material';

type LabelWithIconProps = {
  label: string;
  icon?: React.ReactNode;
  color?: 'gray' | 'blue-primary';
  onClick(): void;
};

export function LabelWithIcon({
  label,
  icon,
  color = 'gray',
  onClick,
}: LabelWithIconProps) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography
        variant="overline"
        sx={(theme) => ({
          color: (theme.palette.gray as PaletteColor).main,
          opacity: 0.5,
          letterSpacing: '0.05em',
        })}
      >
        {label}
      </Typography>
      {icon ? (
        <IconButton
          onClick={onClick}
          sx={{ color: (theme) => (theme.palette[color] as PaletteColor).main }}
        >
          {icon}
        </IconButton>
      ) : null}
    </Stack>
  );
}
