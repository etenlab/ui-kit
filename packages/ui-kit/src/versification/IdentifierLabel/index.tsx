import React, { useState } from 'react';

import { SxProps, Theme } from '@mui/material/styles';
import { Box, Popover } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';
import { NewIdentifierBoxProps, NewIdentifierBox } from '../NewIdentifierBox';

export type IdentifierLabelProps = Parameters<typeof IdentifierLabel>[0];

export function IdentifierLabel({
  nodeType,
  originalValue,
  translationValues,
  currentValue,
  short = false,
  sx = [],
  onNewIdentifierSave,
}: Pick<
  NewIdentifierBoxProps,
  'nodeType' | 'originalValue' | 'translationValues'
> & {
  currentValue: string;
  short?: boolean;
  sx?: SxProps<Theme>;
  onNewIdentifierSave(value: string): void;
}) {
  const { getColor } = useColorModeContext();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const prefix = !short
    ? `${nodeType.charAt(0).toUpperCase()}${nodeType.slice(1)} `
    : nodeType === 'chapter'
    ? 'Ch. '
    : 'v';
  const label = `${prefix}${currentValue}`;

  return (
    <Box
      component="strong"
      sx={[
        {
          position: 'relative',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          fontSize: '14px',
          '&:hover div': {
            display: 'block',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          display: !open ? 'none' : 'block',
          position: 'absolute',
          top: '-1px',
          right: '-4px',
          bottom: '-3px',
          left: '-4px',
          background: getColor('middle-yellow'),
          borderRadius: '4px',
        }}
      />
      <Box
        component="span"
        sx={{
          position: 'relative',
          color: getColor('dark'),
          userSelect: 'none',
        }}
        onClick={handleClick}
      >
        {label}
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 25,
          horizontal: -4,
        }}
        elevation={0}
        PaperProps={{
          sx: {
            background: 'none',
          },
        }}
      >
        <NewIdentifierBox
          nodeType={nodeType}
          originalValue={originalValue}
          translationValues={translationValues}
          onSave={onNewIdentifierSave}
          onCancel={handleClose}
          sx={{ borderRadius: '4px' }}
        />
      </Popover>
    </Box>
  );
}
