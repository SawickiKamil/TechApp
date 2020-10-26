import { createMuiTheme } from '@material-ui/core/styles';

// main google font to apply to all elements by default
export const primaryFont =
  process.env.REACT_APP_PRIMARY_FONT || 'Space Mono, monospace';
export const secondaryFont =
  process.env.REACT_APP_SECONDARY_FONT || 'Lato, sans-serif';

interface ITechApp {
  white: string;
  lightYellow: string;
  green: string;
  graphiteBlack: string;
  lightTuna: string;
  slightlyTransparent: string;
  veryTransparent: string;
  lightSilver: string;
  tuna: string;
  red: string;
  darkRed: string;
  lightBlue: string;
  lightOrange: string;
  lightPink: string;
  darkGreen: string;
  todoOrange: string;
}

export const CustomPalette: ITechApp = {
  white: '#ffffff',
  lightBlue: '#9ADCFF',
  lightOrange: '#CF9176',
  lightPink: '#C684C1',
  lightYellow: '#DCDDA7',
  red: '#F6876D',
  darkRed: '#EF0303',
  darkGreen: '#699A52',
  green: '#1FDBA9',
  todoOrange: '#FF8C00',
  graphiteBlack: '#1E1E1E',
  lightTuna: '#45484c',
  tuna: '#313336',
  slightlyTransparent: 'rgba(255, 255, 255, 0.6)',
  veryTransparent: 'rgba(255, 255, 255, 0.1)',
  lightSilver: '#d8d8d8',
};

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    customPalette: ITechApp;
    field: {
      size: number;
      borderColor: string;
      placeholderColor: string;
      defaultWidth: number;
    };
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customPalette: ITechApp;
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}

// our theme
// allow configuration using `createMuiTheme`
export const theme = createMuiTheme({
  customPalette: CustomPalette,
  fonts: {
    primary: primaryFont,
    secondary: secondaryFont,
  },
  overrides: {
    MuiTypography: {
      h1: {
        color: CustomPalette.white,
        fontWeight: 600,
        fontSize: '3rem',
        textAlign: 'center',
        fontFamily: primaryFont,
      },
      h2: {
        color: CustomPalette.white,
        fontWeight: 600,
        fontSize: '2rem',
        textAlign: 'center',
        fontFamily: primaryFont,
      },
      h3: {
        color: CustomPalette.white,
        fontWeight: 600,
        fontSize: '1.5rem',
        textAlign: 'center',
        fontFamily: primaryFont,
      },
    },
    MuiLink: {
      root: {
        textDecoration: 'none',
        color: CustomPalette.lightYellow,
        letterSpacing: 1.5,
      },
    },
    MuiInputLabel: {
      root: {
        color: CustomPalette.slightlyTransparent,
        '&$focused': {
          color: CustomPalette.slightlyTransparent,
          fontWeight: 'normal',
        },
      },
      outlined: {
        transform: 'translate(20px, 23px) scale(1)',
        '&$shrink': {
          transform: 'translate(0px, -14px) scale(0.75)',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 3,
        '& $notchedOutline': {
          borderColor: 'transparent',
        },
        '&:hover $notchedOutline': {
          borderColor: 'transparent',
        },
        '&$focused $notchedOutline': {
          borderWidth: '0.05rem',
          borderColor: CustomPalette.lightSilver,
        },
        '& legend': {
          width: '0px !important',
        },
        backgroundColor: CustomPalette.veryTransparent,
      },
      input: {
        padding: '15px 20px 16px',
        fontSize: '1rem',
        height: '1.8rem',
        lineHeight: 1.78,
        fontWeight: 600,
        color: CustomPalette.white,
        '&::placeholder': {
          fontWeight: 'normal',
        },
      },
      multiline: {
        backgroundColor: CustomPalette.veryTransparent,
        padding: '16px 20px',
      },
      inputMultiline: {
        minHeight: 200,
        backgroundColor: 'transparent',
      },
    },
    MuiButton: {
      root: {
        backgroundColor: CustomPalette.lightPink,
        fontSize: '1.25rem',
        letterSpacing: '0.1px',
        fontFamily: secondaryFont,
        color: CustomPalette.white,
        textTransform: 'capitalize',
        '&$disabled': {
          color: CustomPalette.white,
          opacity: 0.23,
        },
      },
      text: {
        color: CustomPalette.white,
      },
      sizeLarge: {
        fontSize: '1.25rem',
        width: 300,
        height: 64,
      },
    },
  },
});

// extend theme type
export type Theme = typeof theme;
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {}
  // we can extend theme with custom keys here
  interface ThemeOptions {}
}
