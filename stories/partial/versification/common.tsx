import React, { ReactElement } from 'react';
import { PartialStoryFn, Args } from '@storybook/csf';
import { ReactFramework } from '@storybook/react';
import jsxToString from 'jsx-to-string';

import { SxProps, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

import { ThemeProvider } from '../../../packages/ui-kit/src/ThemeProvider/ThemeProvider';
import { colors } from '../../../packages/ui-kit/src/ThemeProvider/palette';

export function buildDecorator({ sx = [] }: { sx?: SxProps<Theme> } = {}) {
  return (Story: PartialStoryFn<ReactFramework, Args>) => (
    <ThemeProvider>
      <Box
        sx={[
          {
            margin: '3em',
            width: '500px',
            backgroundColor: ({ palette: { mode } }) => colors['white'][mode],
            border: ({ palette: { mode } }) =>
              `1px solid ${colors['light-blue'][mode]}`,
            padding: '3em',
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Story />
      </Box>
    </ThemeProvider>
  );
}

export function buildDocs(element: ReactElement) {
  return {
    docs: {
      source: {
        code: jsxToString(element, {
          shortBooleanSyntax: true,
        }),
        language: 'jsx',
        format: true,
        type: 'auto',
      },
    },
  };
}
