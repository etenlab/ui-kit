import React from 'react';
import { Box } from '@mui/material';
import { DebounceInput } from 'react-debounce-input';
import { Autocomplete, Input } from '../../input';
const PADDING = 20;

type FiltersAndSearchProps = {
  ethnologueOptions: Array<string>;
  setEthnologue: (e: string) => void;
  setLanguage: (l: string) => void;
  setSearch: (s: string) => void;
};

export function FiltersAndSearch({
  ethnologueOptions,
  setEthnologue,
  setLanguage,
  setSearch,
}: FiltersAndSearchProps) {
  return (
    <>
      <Box
        width={'100%'}
        padding={`${PADDING}px 0 ${PADDING}px`}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        gap={`${PADDING}px`}
      >
        <Box flex={1}>
          <Autocomplete
            fullWidth
            options={ethnologueOptions}
            label="Ethnologue"
            onChange={(e,v) => v && setEthnologue(v)}
          ></Autocomplete>
        </Box>
        <Box flex={1}>
          <DebounceInput
            sx={{ width: '100%' }}
            width={1}
            element={Input}
            label="Language ID"
            debounceTimeout={500}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          />
        </Box>
      </Box>
      <Box width={1} paddingBottom={`${PADDING}px`}>
        <DebounceInput
          sx={{ width: '100%' }}
          width={1}
          element={Input}
          label="Search..."
          debounceTimeout={500}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Box>
    </>
  );
}
