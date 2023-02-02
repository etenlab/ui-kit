import { ThemeOptions } from '@mui/material';

export const typography: ThemeOptions = {
  typography: {
    fontFamily: ['Inter'].join(','),
    fontSize: 12,
    h1: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '36px',
      letterSpacing: '-0.02em',
      textTransform: 'capitalize',
      color: '#404040',
    },
    h2: {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: '28px',
      letterSpacing: '-0.02em',
      textTransform: 'capitalize',
      color: '#404040',
    },
    h3: {
      fontWeight: 600,
      fontSize: 18,
      lineHeight: '28px',
      letterSpacing: '-0.02em',
      textTransform: 'capitalize',
      color: '#404040',
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '26px',
      display: 'flex',
      alignItems: 'center',
      color: '#404040',
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      display: 'flex',
      alignItems: 'center',
      color: '#404040',
    },
    body3: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '20px',
      display: 'flex',
      alignItems: 'center',
      color: '#404040',
    },
    overline: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
      display: 'flex',
      alignItems: 'center',
      textTransform: 'uppercase',
      color: '#404040',
    },
    caption: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '30px',
      display: 'flex',
      alignItems: 'center',
      color: '#404040',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
      display: 'flex',
      alignItems: 'center',
      color: '#404040',
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '18px',
      color: '#404040',
    },
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
