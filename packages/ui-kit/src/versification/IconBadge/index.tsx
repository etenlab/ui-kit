import React from 'react';

import { IconType } from 'react-icons';

import { Box } from '@mui/material';

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
        backgroundColor: '#e3eaf3',
        color: '#5c6673',
        fontWeight: 700,
        fontSize: 12,
        ...(success && {
          backgroundColor: '#daf2ea',
          color: '#4abe95',
        }),
        ...(danger && {
          backgroundColor: '#ffe4e4',
          color: '#e04e4e',
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
