import React from 'react';
import {
  styled,
  IconButton,
  Tooltip as MuiTooltip,
  TooltipProps,
  tooltipClasses,
} from '@mui/material';

export const EmojiWrapper = styled(IconButton)(({ theme }) => ({
  display: 'inline-flex',
  border: `1px solid ${theme.palette.text.gray}`,
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
  color: theme.palette.text.gray,
  cursor: 'pointer',
}));

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
    backgroundColor: theme.palette.text.dark,
    color: theme.palette.text.white,
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
