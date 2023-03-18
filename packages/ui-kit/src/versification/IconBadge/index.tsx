import React from 'react';
import { IconType } from 'react-icons';

import { Box } from '@mui/material';

import { colors } from '../../ThemeProvider/palette';

export function IconBadge({
  value = 0,
  Icon,
  success = false,
  danger = false,
}: {
  value?: number;
  Icon: IconType;
  success?: boolean;
  danger?: boolean;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '4px',
        padding: '0px 9px',
        height: 24,
        backgroundColor: colors['light-blue'],
        color: colors.gray,
        fontWeight: 700,
        fontSize: 12,
        ...(success && {
          backgroundColor: colors['light-green'],
          color: colors.green,
        }),
        ...(danger && {
          backgroundColor: colors['light-red'],
          color: colors.red,
        }),
        '& + *': {
          marginLeft: '10px',
        },
        '& svg': {
          fontSize: 17,
        },
        '& svg + span': {
          marginLeft: '4px',
        },
      }}
    >
      <Icon />
      {value > 0 && <span>{value}</span>}
    </Box>
  );
}