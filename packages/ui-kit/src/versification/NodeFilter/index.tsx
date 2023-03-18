import React from 'react';

import { Select, MenuItem } from '@mui/material';

import { colors } from '../../ThemeProvider/palette';
import { BiChevronDown } from '../../icons';

export function NodeFilter({
  nodeType,
  disabled,
  options = [],
  value,
  onChange,
}: {
  nodeType: 'chapter' | 'verse';
  disabled?: boolean;
  options?: { value: string; text: string }[];
  value?: string;
  onChange?(value: undefined | string): void;
}) {
  const option = value
    ? options.find((option) => option.value === value)
    : null;

  return (
    <Select
      displayEmpty
      disabled={disabled}
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      sx={{
        width: '100%',
        color: colors.gray.light,
        backgroundColor: '#fff',
        borderRadius: '10px',
        border: `1px solid ${colors['middle-gray'].light}`,
        fontSize: 14,
        height: '48px',
        '&.Mui-disabled': {
          background: 'rgba(255, 255, 255, 0.5)',
          color: colors.gray.light,
        },
        '& .MuiInputBase-input': {
          pl: 2,
          py: 0,
          height: '100% !important',
          display: 'flex',
          alignItems: 'center',
          '&.Mui-disabled': {
            '-webkit-text-fill-color': 'unset',
          },
        },
        '& fieldset': {
          display: 'none',
        },
        '& .MuiSelect-icon': {
          color: 'inherit',
          fontSize: 30,
          '&.Mui-disabled': {
            color: 'inherit',
          },
        },
      }}
      renderValue={() => (
        <div>
          # {`${nodeType[0].toUpperCase()}${nodeType.slice(1)}`}
          {option ? ` ${option.text}` : ''}
        </div>
      )}
      IconComponent={BiChevronDown}
    >
      {[{ value: '', text: '' }, ...options].map(({ value, text }, index) => (
        <MenuItem
          key={index}
          value={value}
          sx={{
            '&.Mui-selected': {
              background: colors['light-blue'].light,
            },
          }}
        >
          {text === '' ? <br /> : text}
        </MenuItem>
      ))}
    </Select>
  );
}
