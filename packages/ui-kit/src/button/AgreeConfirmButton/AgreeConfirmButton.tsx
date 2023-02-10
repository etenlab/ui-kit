import React from 'react';

import { useTheme, PaletteColor } from '@mui/material';

import { Button } from '../Button';
import { BiLike, BiDislike } from '../../icons';

type AgreeConfirmButtonProps = {
  fullWidth?: boolean;
  withIcon?: boolean;
  zeroBorderRadius?: boolean;
  kind: 'agree' | 'disagree';
  disabled?: boolean;
  label?: string;
  onClick(): void;
};

export function AgreeConfirmButton({
  fullWidth,
  withIcon,
  zeroBorderRadius = false,
  kind,
  disabled,
  label,
  onClick,
}: AgreeConfirmButtonProps) {
  const theme = useTheme();

  let autoLabel;
  let startWith;
  let color: 'red' | 'green' = 'red';

  const lightBlueColor = (
    theme.palette['light-blue' as keyof typeof theme.palette] as PaletteColor
  ).main;
  const darkColor = (
    theme.palette['dark' as keyof typeof theme.palette] as PaletteColor
  ).main;
  const sxObj = {
    borderRadius: zeroBorderRadius ? '0 !important' : '4px',
  };

  if (kind === 'agree') {
    autoLabel = 'Agree';
    color = 'green';
    startWith = withIcon === true ? <BiLike /> : undefined;
  }

  if (kind === 'disagree') {
    autoLabel = 'Disagree';
    color = 'red';
    startWith = withIcon ? <BiDislike /> : undefined;
  }

  return (
    <Button
      disabled={disabled}
      variant="contained"
      onClick={onClick}
      fullWidth={fullWidth}
      startIcon={startWith}
      color={color}
      sx={{
        ...sxObj,
        '&.Mui-disabled': {
          backgroundColor: lightBlueColor,
          color: darkColor,
          cursor: 'not-allowed',
        },
      }}
      size="small"
    >
      {label ? label : autoLabel}
    </Button>
  );
}
