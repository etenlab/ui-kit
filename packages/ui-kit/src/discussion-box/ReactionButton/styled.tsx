import React from 'react';
import {
  styled,
  IconButton,
  Tooltip as MuiTooltip,
  TooltipProps,
  tooltipClasses,
} from '@mui/material';

import { colors } from '../../ThemeProvider';

export const EmojiWrapper = styled(IconButton)({
  display: 'inline-flex',
  border: `1px solid ${colors['gray']}`,
  borderRadius: '4px',
  height: '25px',
  lineHeight: '25px',
  width: '41px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  color: colors['gray'],
  cursor: 'pointer',
});

export const EmojiContainer = styled('span')({
  display: 'inline-flex',
  fontSize: '16px',
  lineHeight: '22px',
});

export const EmojiCount = styled('span')({
  fontSize: '12px',
  lineHeight: '18px',
});

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    display: 'flex',
    backgroundColor: '#000',
    color: '#f5f5f5',
    width: 200,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    borderRadius: '16px',
  },
  [`& .${tooltipClasses.arrow}`]: {
    '&::before': {
      backgroundColor: '#000',
    },
  },
}));
