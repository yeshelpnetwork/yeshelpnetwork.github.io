'use client';

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function createEmotionCache() {
  let insertionPoint: HTMLElement | undefined;
  if (typeof document !== 'undefined') {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    if (emotionInsertionPoint) {
      insertionPoint = emotionInsertionPoint;
    }
  }
  return createCache({ key: 'mui', insertionPoint, prepend: true });
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1674C8',
      light: '#4F9DE0',
      dark: '#0F5DA0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5B9A45',
      light: '#83BC67',
      dark: '#3F6F31',
      contrastText: '#F8FFF3',
    },
    warning: {
      main: '#FFD54F',
      light: '#FFEA9B',
      dark: '#D5AE32',
      contrastText: '#3A3007',
    },
    background: {
      default: '#E7F7FF',
      paper: '#F7FCFF',
    },
    text: {
      primary: '#17324B',
      secondary: '#355B79',
    },
    divider: 'rgba(67, 121, 163, 0.18)',
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "var(--font-nunito), 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    h1: {
      fontFamily: 'var(--font-baloo), var(--font-nunito), sans-serif',
      fontWeight: 800,
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: 'var(--font-baloo), var(--font-nunito), sans-serif',
      fontWeight: 700,
      lineHeight: 1.08,
    },
    h3: {
      fontFamily: 'var(--font-baloo), var(--font-nunito), sans-serif',
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h4: {
      fontFamily: 'var(--font-baloo), var(--font-nunito), sans-serif',
      fontWeight: 700,
      lineHeight: 1.12,
    },
    h5: {
      fontFamily: 'var(--font-baloo), var(--font-nunito), sans-serif',
      fontWeight: 700,
      lineHeight: 1.14,
    },
    h6: {
      fontFamily: 'var(--font-baloo), var(--font-nunito), sans-serif',
      fontWeight: 700,
      lineHeight: 1.15,
    },
    subtitle1: {
      fontFamily: 'var(--font-baloo), var(--font-nunito), sans-serif',
      fontWeight: 700,
    },
    button: {
      fontWeight: 800,
      fontSize: '0.98rem',
      letterSpacing: '-0.01em',
    },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
    overline: {
      fontWeight: 800,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          textTransform: 'none',
          borderRadius: 999,
          paddingInline: 22,
          minHeight: 46,
          boxShadow: 'none',
        },
        containedPrimary: {
          backgroundImage: 'linear-gradient(180deg, #4F7DD2 0%, #3F6EC6 100%)',
          boxShadow: '0 14px 28px rgba(54, 97, 173, 0.24)',
          '&:hover': {
            backgroundImage: 'linear-gradient(180deg, #4A78CB 0%, #3967BD 100%)',
            boxShadow: '0 18px 34px rgba(54, 97, 173, 0.28)',
          },
        },
        outlinedPrimary: {
          backgroundColor: 'rgba(255, 255, 255, 0.46)',
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
            backgroundColor: 'rgba(255, 255, 255, 0.68)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 28,
          border: '1px solid rgba(255, 255, 255, 0.58)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
          maxWidth: '100%',
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const cache = React.useMemo(() => createEmotionCache(), []);
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
