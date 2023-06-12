import React from 'react';

import { Select, MenuItem } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';
import { DiDropDown } from '../../icons';

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
  const { getColor } = useColorModeContext();
  const option = value
    ? options.find((option) => option.value === value)
    : null;

  return (
    <Select
      displayEmpty
      disabled={disabled}
      value={value !== undefined ? value : ''}
      onChange={(event) => onChange?.(event.target.value)}
      sx={{
        width: '100%',
        color: getColor('gray'),
        backgroundColor: getColor('bg-main'),
        borderRadius: '10px',
        border: `1px solid ${getColor('middle-gray')}`,
        fontSize: 14,
        height: '48px',
        '&.Mui-disabled': {
          background: getColor('disable'),
          color: getColor('gray'),
        },
        '& .MuiInputBase-input': {
          pl: 2,
          py: 0,
          height: '100% !important',
          display: 'flex',
          alignItems: 'center',
          '&.Mui-disabled': {
            WebkitTextFillColor: 'unset',
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
      IconComponent={DiDropDown}
    >
      {[{ value: '', text: '' }, ...options].map(({ value, text }, index) => (
        <MenuItem
          key={index}
          value={value}
          sx={{
            '&.Mui-selected': {
              background: getColor('light-blue'),
            },
          }}
        >
          {text === '' ? <br /> : text}
        </MenuItem>
      ))}
    </Select>
  );
}
