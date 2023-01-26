import React, { Fragment } from 'react';

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

import { StyledFormLabel, StyledDivider } from './styled';

type Item = {
  value: unknown;
  label: string;
};

type VerticalRadioGroupProps = {
  withUnderline?: boolean;
  items: Item[];
  label: string;
  value: unknown;
  onChange(event: React.SyntheticEvent, newValue: unknown): void;
};

export function VerticalRadioGroup({
  withUnderline = false,
  items,
  value,
  label,
  onChange,
}: VerticalRadioGroupProps) {
  return (
    <FormControl sx={{ width: '100%' }}>
      <StyledFormLabel id="demo-controlled-radio-buttons-group">
        {label}
      </StyledFormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        {items.map(({ value, label }) => (
          <Fragment key={label}>
            <FormControlLabel value={value} control={<Radio />} label={label} />
            {withUnderline ? <StyledDivider /> : null}
          </Fragment>
        ))}
      </RadioGroup>
    </FormControl>
  );
}
