import React from 'react';

import { ThemeProvider as MuiThemeProvider, GlobalStyles } from '@mui/material';
import '@fontsource/inter';

import { theme } from './theme';

type ThemeProviderProps = {
  children?: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyles
        styles={() => ({
          '*, *::before, *::after, html': {
            boxSizing: 'border-box',
          },
          body: {
            fontFamily: 'Inter',
          },
        })}
      />
      {children}
    </MuiThemeProvider>
  );
}
