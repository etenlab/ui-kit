import { ThemeOptions, PaletteColorOptions } from '@mui/material';

export const colors = {
  'blue-primary': '#1F77DF',
  'light-blue': '#E3EAF3',
  disable: '#F3F6F9',
  dark: '#1B1B1B',
  gray: '#5C6673',
  'middle-gray': '#C2CBD7',
  white: '#FFFFFF',
  red: '#E04E4E',
  'light-red': '#F3F6F9',
  green: '#4ABE95',
  'light-green': '#DAF2EA',
  yellow: '#FCBB14',
  'middle-yellow': '#FFF1CE',
  'light-yellow': '#FFF9EA',
};

export const palette: ThemeOptions = {
  palette: {
    'blue-primary': {
      main: colors['blue-primary'],
      contrastText: '#FFFFFF',
    },
    'light-blue': {
      main: colors['light-blue'],
      contrastText: colors['middle-gray'],
    },
    disable: {
      main: colors['disable'],
    },
    dark: {
      main: colors['dark'],
    },
    gray: {
      main: colors['gray'],
    },
    'middle-gray': {
      main: colors['middle-gray'],
    },
    white: {
      main: colors['white'],
    },
    red: {
      main: colors['red'],
      contrastText: colors['white'],
    },
    'light-red': {
      main: colors['light-red'],
    },
    green: {
      main: colors['green'],
      contrastText: colors['white'],
    },
    'light-green': {
      main: colors['light-green'],
    },
    yellow: {
      main: colors['yellow'],
    },
    'middle-yellow': {
      main: colors['middle-yellow'],
    },
    'light-yellow': {
      main: colors['light-yellow'],
    },
  },
};

declare module '@mui/material/styles' {
  interface CustomPalette {
    'blue-primary': PaletteColorOptions;
    'light-blue': PaletteColorOptions;
    disable: PaletteColorOptions;
    dark: PaletteColorOptions;
    gray: PaletteColorOptions;
    'middle-gray': PaletteColorOptions;
    white: PaletteColorOptions;
    red: PaletteColorOptions;
    'light-red': PaletteColorOptions;
    green: PaletteColorOptions;
    'light-green': PaletteColorOptions;
    yellow: PaletteColorOptions;
    'middle-yellow': PaletteColorOptions;
    'light-yellow': PaletteColorOptions;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}
