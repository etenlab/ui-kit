import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import {
  ThemeProvider as MuiThemeProvider,
  GlobalStyles,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import '@fontsource/inter';
import '@fontsource/noto-serif-display';

import { deepmerge } from '@mui/utils';
import { getThemeOptions } from './themeOptions';
import { designColors, colors } from './palette';
import { logger } from '../logger';

export const mode =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const ColorModeContext = createContext({
  setColorMode: (colorMode: 'light' | 'dark') => {
    logger.info(colorMode);
  },
  getColor: (lightModeColor: string, _darkModeColor?: string) => {
    return lightModeColor;
  },
});

export function useColorModeContext() {
  const context = useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error(
      'useColorModeContext must be within ThemeProvider which provided by @eten-lab/ui-kit package!',
    );
  }

  return context;
}

type ThemeProviderProps = {
  autoDetectPrefersDarkMode?: boolean;
  children?: React.ReactNode;
};

export function ThemeProvider({
  children,
  autoDetectPrefersDarkMode = true,
}: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (!autoDetectPrefersDarkMode) {
      return;
    }

    if (prefersDarkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [prefersDarkMode, autoDetectPrefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      setColorMode: (colorMode: 'light' | 'dark') => {
        setMode(colorMode);
      },
      getColor: (lightModeColor: string, darkModeColor?: string) => {
        if (mode === 'light') {
          if (designColors[lightModeColor as keyof typeof designColors]) {
            return designColors[lightModeColor as keyof typeof designColors];
          } else {
            return lightModeColor;
          }
        }

        if (mode === 'dark' && darkModeColor) {
          if (designColors[darkModeColor as keyof typeof designColors]) {
            return designColors[darkModeColor as keyof typeof designColors];
          } else {
            return darkModeColor;
          }
        }

        if (colors[lightModeColor as keyof typeof colors]) {
          return colors[lightModeColor as keyof typeof colors][mode];
        } else if (designColors[lightModeColor as keyof typeof designColors]) {
          return designColors[lightModeColor as keyof typeof designColors];
        } else {
          return lightModeColor;
        }
      },
    }),
    [mode],
  );

  const theme = useMemo(
    () =>
      createTheme(
        deepmerge(getThemeOptions(mode), {
          palette: {
            mode,
          },
        }),
      ),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
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
    </ColorModeContext.Provider>
  );
}
