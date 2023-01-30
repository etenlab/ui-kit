import { ThemeOptions, PaletteColorOptions } from '@mui/material';

export const palette: ThemeOptions = {
  palette: {
    'blue-primary': {
      main: '#1F77DF',
      contrastText: '#FFFFFF',
    },
    'light-blue': {
      main: '#E3EAF3',
      contrastText: '#5C6673',
    },
    disable: {
      main: '#F3F6F9',
    },
    dark: {
      main: '#1B1B1B',
    },
    gray: {
      main: '#5C6673',
    },
    'middle-gray': {
      main: '#C2CBD7',
    },
    white: {
      main: '#FFFFFF',
    },
    red: {
      main: '#E04E4E',
      contrastText: '#FFFFFF',
    },
    'light-red': {
      main: '#F3F6F9',
    },
    green: {
      main: '#4ABE95',
      contrastText: '#FFFFFF',
    },
    'light-green': {
      main: '#DAF2EA',
    },
    yellow: {
      main: '#FCBB14',
    },
    'middle-yellow': {
      main: '#FFF1CE',
    },
    'light-yellow': {
      main: '#FFF9EA',
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
