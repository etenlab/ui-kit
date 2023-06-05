import React, { useState } from 'react';

import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps,
  IconButton,
  Popper,
  styled,
} from '@mui/material';

import { autocompleteClasses } from '@mui/material/Autocomplete';

import { DiDropDown, BiChevronUp } from '../../icons';

import { Input } from '../Input';

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: 'border-box',
    width: '100%',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

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

  const adornment = open ? <BiChevronUp /> : <DiDropDown />;

  return (
    <MuiAutocomplete
      {...props}
      open={open}
      blurOnSelect="touch"
      onOpen={handleOpen}
      onClose={handleClose}
      PopperComponent={StyledPopper}
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
