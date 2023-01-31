import React from 'react';

import { Button, useTheme, PaletteColor } from '@mui/material';

import { BiLike, BiDislike } from '../../icons';

type AgreeConfirmButtonProps = {
  fullWidth?: boolean;
  withIcon?: boolean;
  kind: 'agree' | 'disagree';
  disabled?: boolean;
  onClick(): void;
};

export function AgreeConfirmButton({
  fullWidth,
  withIcon,
  kind,
  disabled,
  onClick,
}: AgreeConfirmButtonProps) {
  const theme = useTheme();

  let label;
  let startWith;
  let color: 'red' | 'green' = 'red';

  const lightBlueColor = (theme.palette[
    'light-blue' as keyof typeof theme.palette
  ] as PaletteColor).main;
  const darkColor = (theme.palette[
    'dark' as keyof typeof theme.palette
  ] as PaletteColor).main;
  const sxObj = {
    width: fullWidth ? 'null' : 157,
    textAlign: 'center',
    textTransform: 'capitalize',
  };

  if (kind === 'agree') {
    label = 'Agree';
    color = 'green';
    console.log(withIcon);
    startWith = withIcon === true ? <BiLike /> : undefined;
  }

  if (kind === 'disagree') {
    label = 'Disagree';
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
    >
      {label}
    </Button>
  );
}
