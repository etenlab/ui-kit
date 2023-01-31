import { ThemeOptions, PaletteColor } from '@mui/material';

export const components: ThemeOptions = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const color = ownerState.color as keyof typeof theme.palette;
          const mainColor = (theme.palette[color] as PaletteColor).main;

          return {
            '& .MuiInputBase-root': {
              borderRadius: '10px !important',
            },
            '& label': {
              lineHeight: '1.1375em',
            },
            '& input': {
              padding: '12.5px 14px',
              color: `${mainColor} !important`,
            },
            '& .MuiInputAdornment-root': {
              color: `${mainColor} !important`,
              opacity: 0.54,
            },
            '& .MuiInputBase-multiline': {
              padding: '12.5px 14px !important',
              '& textarea': {
                minHeight: '203px',
                color: `${mainColor} !important`,
              },
            },
          };
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            paddingRight: '9px !important',
          },
          '& .MuiIconButton-sizeMedium': {
            padding: '3px !important',
          },
          '& label': {
            lineHeight: '1.1375em',
          },
          '& input': {
            paddingTop: '3.5px !important',
            paddingBottom: '3.5px !important',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const color = ownerState.color as keyof typeof theme.palette;
          const mainColor = (theme.palette[color] as PaletteColor).main;
          const grayColor = (theme.palette['middle-gray'] as PaletteColor).main;

          return {
            color: grayColor,
            '&.Mui-checked': {
              color: `${mainColor} !important`,
            },
          };
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const color = ownerState.color as keyof typeof theme.palette;
          const mainColor = (theme.palette[color] as PaletteColor).main;
          const grayColor = (theme.palette['middle-gray'] as PaletteColor).main;

          return {
            color: grayColor,
            '&.Mui-checked': {
              color: `${mainColor} !important`,
            },
          };
        },
      },
    },
  },
};

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/Radio' {
  interface ButtonPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/Checkbox' {
  interface ButtonPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    red: true;
  }
}
