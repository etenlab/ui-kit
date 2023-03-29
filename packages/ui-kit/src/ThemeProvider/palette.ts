import { ThemeOptions } from '@mui/material';

export const colors = {
  'blue-primary': {
    light: '#1F77DF',
    dark: '#42a5f5',
  },
  'light-blue': {
    light: '#E3EAF3',
    dark: '#006064',
  },
  disable: {
    light: '#F3F6F9',
    dark: '#424242',
  },
  dark: {
    light: '#1B1B1B',
    dark: '#fafafa',
  },
  gray: {
    light: '#5C6673',
    dark: '#eee',
  },
  'middle-gray': {
    light: '#C2CBD7',
    dark: '#bdbdbd',
  },
  white: {
    light: '#FFFFFF',
    dark: '#212121',
  },
  red: {
    light: '#E04E4E',
    dark: '#d32f2f',
  },
  'light-red': {
    light: '#FFE4E4',
    dark: '#880e4f',
  },
  green: {
    light: '#4ABE95',
    dark: '#a5d6a7',
  },
  'light-green': {
    light: '#DAF2EA',
    dark: '#558b2f',
  },
  yellow: {
    light: '#FCBB14',
    dark: '#e65100',
  },
  'middle-yellow': {
    light: '#FFF1CE',
    dark: '#ff8f00',
  },
  'light-yellow': {
    light: '#FFF9EA',
    dark: '#ffa000',
  },
  'light-gray': {
    light: '#F0F0E7',
    dark: '#F0F0E7'
  },
  'turquoise-light': {
    light: '#60D0B2',
    dark: '#60D0B2'
  },
  'turquoise-dark': {
    light: '#4EAA91',
    dark: '#4EAA91'
  },
  'darker-gray': {
    light: '#31373A',
    dark: '#31373A'
  },
  'lighter-gray': {
    light: '#707070',
    dark: '#707070'
  }
};

export function getColorPalette(mode: 'light' | 'dark'): ThemeOptions {
  return {
    palette: {
      'blue-primary': {
        main: colors['blue-primary'][mode],
        contrastText: '#FFFFFF',
      },
      'light-blue': {
        main: colors['light-blue'][mode],
        contrastText: colors['middle-gray'][mode],
      },
      disable: {
        main: colors['disable'][mode],
      },
      dark: {
        main: colors['dark'][mode],
        contrastText: '#fafafa',
      },
      gray: {
        main: colors['gray'][mode],
        contrastText: '',
      },
      'middle-gray': {
        main: colors['middle-gray'][mode],
        contrastText: '#eee',
      },
      white: {
        main: colors['white'][mode],
        contrastText: '@212121',
      },
      red: {
        main: colors['red'][mode],
        contrastText: colors['white'][mode],
      },
      'light-red': {
        main: colors['light-red'][mode],
      },
      green: {
        main: colors['green'][mode],
        contrastText: colors['white'][mode],
      },
      'light-green': {
        main: colors['light-green'][mode],
      },
      yellow: {
        main: colors['yellow'][mode],
      },
      'middle-yellow': {
        main: colors['middle-yellow'][mode],
      },
      'light-yellow': {
        main: colors['light-yellow'][mode],
      },
      text: {
        'blue-primary': colors['blue-primary'][mode],
        'light-blue': colors['light-blue'][mode],
        disable: colors['disable'][mode],
        dark: colors['dark'][mode],
        gray: colors['gray'][mode],
        'middle-gray': colors['middle-gray'][mode],
        white: colors['white'][mode],
        red: colors['red'][mode],
        'light-red': colors['light-red'][mode],
        green: colors['green'][mode],
        'light-green': colors['light-green'][mode],
        yellow: colors['yellow'][mode],
        'middle-yellow': colors['middle-yellow'][mode],
        'light-yellow': colors['light-yellow'][mode],
      },
    },
  };
}
