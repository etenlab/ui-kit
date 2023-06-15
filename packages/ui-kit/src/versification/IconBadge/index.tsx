import React from 'react';
import { IconType } from 'react-icons';
import { SvgIconProps } from '@mui/material';
import { DiColors } from '../../icons/DesignedIcons/colors';
import { Box } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';

type DiIconType = (
  props: Omit<SvgIconProps, 'color'> & { color?: DiColors },
) => JSX.Element;

export function IconBadge({
  value = 0,
  Icon,
  success = false,
  danger = false,
}: {
  value?: number;
  Icon: IconType | DiIconType;
  success?: boolean;
  danger?: boolean;
}) {
  const { getColor } = useColorModeContext();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '4px',
        padding: '0px 9px',
        height: 24,
        backgroundColor: getColor('light-blue'),
        color: getColor('gray'),
        fontWeight: 700,
        fontSize: 12,
        userSelect: 'none',
        ...(success && {
          backgroundColor: getColor('light-green'),
          color: getColor('green'),
        }),
        ...(danger && {
          backgroundColor: getColor('light-red'),
          color: getColor('red'),
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
