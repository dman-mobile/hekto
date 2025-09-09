import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

const colors = {
  // Primary
  primary: '#FB2E86',

  // Secondary
  secondary: '#F9BA00',
  secondaryLight: '#FFF3CE',

  // Tertiary
  tertiary: '#7E33E0',
  tertiaryLight: '#F2F0FF',

  // Text
  textPrimary: '#101750',
  textSecondary: '#757575',

  // Info
  info: '#603EFF',
  infoLight: '#DDD6FF',

  // Status
  success: '#0CC562',
  dangerLight: '#FEB9C4',

  // Grays & Neutrals
  white: '#FFFFFF',
  black: '#101750',
  gray1: '#F8F8FD',
  gray2: '#E5E0FC', // Divider color
  gray3: '#8A8FB9',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
    },
    tertiary: {
      main: colors.tertiary,
      light: colors.tertiaryLight,
    },
    info: {
      main: colors.info,
      light: colors.infoLight,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.dangerLight,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    background: {
      default: colors.white,
      paper: colors.gray1,
    },
    divider: colors.gray2,
  },
  typography: {
    fontFamily: '"Josefin Sans", sans-serif',
    h1: {
      fontWeight: 700,
      color: colors.textPrimary,
      fontFamily: 'Josefin Sans',
      fontSize: 5.2,
      lineHeight: 6.4,
      letterSpacing: '1.5%',
      textTransform: 'capitalize'
    },
    h2: {
      fontWeight: 700,
      color: colors.textPrimary,
      fontSize: 4.4,
      lineHeight: 5.2,
      letterSpacing: '1.5%'
    },
    h3: {
      fontWeight: 700,
      fontSize: 3.6,
      lineHeight: 4.4,
      letterSpacing: '1.5%',
      color: colors.textPrimary
    },
    body1: {
      fontSize: 16,
      color: colors.textPrimary
    },
    body2: {
      fontSize: 16,
      color: colors.gray3
    }
  },
  spacing: 10,
  shape: {
    borderRadius: .4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: .4,
          textTransform: 'none',
        },
        contained: {
          backgroundColor: colors.primary,
          '&:hover': {
            backgroundColor: '#d62074'
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: '"Josefin Sans", sans-serif',
          color: colors.textPrimary,
          textDecoration: 'none',
          '&:hover': {
            color: colors.primary,
          },
        },
      },
    },
  },
});
