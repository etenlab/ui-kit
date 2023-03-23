import React, { useState } from 'react';

import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps,
  IconButton,
} from '@mui/material';

import { BiChevronDown, BiChevronUp } from '../../icons';

import { Input } from '../Input';

export function Autocomplete<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  valid,
  label,
  withLegend,
  ...props
}: Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & {
    valid?: boolean;
    label?: string;
    withLegend?: boolean;
  },
  'renderInput'
>) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((open) => !open);
  };

  const adornment = open ? <BiChevronUp /> : <BiChevronDown />;

  return (
    <MuiAutocomplete
      {...props}
      open={open}
      blurOnSelect="touch"
      onOpen={handleOpen}
      onClose={handleClose}
      renderInput={(params) => (
        <Input
          {...params}
          withLegend={withLegend}
          label={label}
          valid={valid}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <IconButton onClick={handleToggle}>{adornment}</IconButton>
            ),
          }}
        />
      )}
    />
  );
}
