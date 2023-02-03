import React, { Fragment } from 'react';

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Divider,
} from '@mui/material';

import { Radio } from '../../input';

type Item = {
  value: unknown;
  label: string;
};

type VerticalRadioListProps = {
  withUnderline?: boolean;
  underlineColor?: string;
  items: Item[];
  label?: string;
  value: unknown;
  onChange(event: React.SyntheticEvent, newValue: unknown): void;
};

export function VerticalRadioList({
  withUnderline = false,
  underlineColor,
  items,
  value,
  label,
  onChange,
}: VerticalRadioListProps) {
  console.log(underlineColor);
  const sxObj = underlineColor
    ? { borderColor: `${underlineColor} !important` }
    : {};
  return (
    <FormControl fullWidth>
      {label ? <FormLabel color="gray">{label}</FormLabel> : null}
      <RadioGroup value={value} onChange={onChange}>
        {items.map(({ value, label }) => (
          <Fragment key={label}>
            <FormControlLabel
              value={value}
              control={<Radio />}
              label={label}
              color="dark"
              sx={{ padding: '12px 0' }}
            />
            {withUnderline ? <Divider sx={{ ...sxObj }} /> : null}
          </Fragment>
        ))}
      </RadioGroup>
    </FormControl>
  );
}
