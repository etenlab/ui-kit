import React from 'react';

import { IconButton, Box, IconButtonProps, PaletteColor } from '@mui/material';

export function CircleButton({
  icon,
  color = 'blue-primary',
  circleSize = '34px',
  onClick,
  ...props
}: IconButtonProps & {
  icon: React.ReactNode;
  circleSize?: string;
}) {
  return (
    <IconButton onClick={onClick} color={color} {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          width: circleSize,
          height: circleSize,
          backgroundColor: (theme: unknown | any) =>
            (theme.palette[color as keyof typeof theme.palette] as PaletteColor)
              .main,
        }}
      >
        {icon}
      </Box>
    </IconButton>
  );
}
