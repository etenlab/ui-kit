import React, { useState } from 'react';

import { SxProps, Theme } from '@mui/material/styles';
import { Box, Stack, TextField, InputAdornment, Button } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';

export type NewIdentifierBoxProps = Parameters<typeof NewIdentifierBox>[0];

export function NewIdentifierBox({
  nodeType,
  originalValue,
  translationValues,
  onSave,
  onCancel,
  sx = [],
}: {
  nodeType: 'chapter' | 'verse';
  originalValue: string;
  translationValues: string[];
  onSave(value: string): void;
  onCancel(): void;
  sx?: SxProps<Theme>;
}) {
  const { getColor } = useColorModeContext();
  const label = `# ${nodeType.charAt(0).toUpperCase()}${nodeType.slice(1)}`;
  const [value, setValue] = useState('');
  const [errorText, setErrorText] = useState('');

  function handleSave() {
    if (!value) {
      setErrorText('Required Field');
      return;
    }

    if ([originalValue, ...translationValues].includes(value)) {
      setErrorText('Value is used already');
      return;
    }

    onSave(value);
  }

  return (
    <Stack
      spacing={1.5}
      sx={[
        {
          border: `1px solid ${getColor('middle-gray')}`,
          background: getColor('light-blue'),
          color: getColor('gray'),
          padding: '20px',
          fontSize: '12px',
          '& label': {
            fontWeight: 600,
            display: 'inline-block',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        component="h6"
        sx={{
          margin: 0,
          textTransform: 'uppercase',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        Start of a new
      </Box>
      <div>
        <Box component="label" mb={0.5}>
          New value
        </Box>
        <TextField
          fullWidth
          placeholder="Type an identifier"
          value={value}
          error={!!errorText}
          helperText={errorText}
          onInput={() => setErrorText('')}
          onChange={(event) => setValue(event.target.value)}
          sx={{
            '& .MuiFormHelperText-root': {
              m: 0,
              fontSize: 12,
            },
          }}
          InputProps={{
            sx: {
              bgcolor: getColor('white'),
              '& .MuiInputAdornment-root': {
                color: `${getColor('gray')} !important`,
                opacity: 1,
                '& > p': {
                  fontSize: '14px',
                  color: getColor('gray'),
                },
              },
              '& .MuiInputBase-input': {
                paddingLeft: 0,
                fontSize: '14px',
                color: `${getColor('gray')} !important`,
                '&::placeholder': {
                  opacity: 1,
                  color: getColor('middle-gray'),
                },
              },
            },
            startAdornment: (
              <InputAdornment position="start">{label}</InputAdornment>
            ),
          }}
        />
      </div>
      <Stack spacing={0.5}>
        <div>
          <Box component="label" sx={{ mr: 0.6 }}>
            Original:
          </Box>
          <span>
            {label} {originalValue}
          </span>
        </div>
        <div>
          <Box component="label" sx={{ mr: 0.6 }}>
            Translations:
          </Box>
          <span>
            {translationValues.map((value) => `${label} ${value}`).join(', ')}
          </span>
        </div>
      </Stack>
      <Stack
        spacing={0.8}
        sx={{
          '& button': {
            boxShadow: 'none !important',
            borderRadius: '10px',
            height: '42px',
            textTransform: 'none',
            fontSize: '15px',
            fontWeight: 500,
          },
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            color: '#fff',
            bgcolor: getColor('green'),
            '&:hover, &:active': { bgcolor: '#6ecbaa' },
          }}
          onClick={() => handleSave()}
        >
          Save
        </Button>
        <Button
          fullWidth
          sx={{
            color: getColor('gray'),
            bgcolor: 'transparent',
            '&:hover, &:active': { bgcolor: 'rgba(0,0,0,0.05)' },
          }}
          onClick={() => onCancel()}
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  );
}
