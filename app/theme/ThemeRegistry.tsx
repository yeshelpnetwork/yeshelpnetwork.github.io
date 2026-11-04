'use client';

import { type ReactNode, useMemo } from 'react';
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
      main: '#1473CC',
      light: '#4DA2EC',
      dark: '#0D5CA8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0D9488',
      light: '#2DD4BF',
      dark: '#0F766E',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#D97706',
      light: '#FDE68A',
      dark: '#92400E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F0F8FE',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#12304C',
      secondary: '#335777',
    },
    divider: 'rgba(20, 115, 204, 0.12)',
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontFamily: 'var(--font-heading), var(--font-sans), sans-serif',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: 'var(--font-heading), var(--font-sans), sans-serif',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: 'var(--font-heading), var(--font-sans), sans-serif',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: 'var(--font-heading), var(--font-sans), sans-serif',
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontFamily: 'var(--font-heading), var(--font-sans), sans-serif',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
    },
    h6: {
      fontFamily: 'var(--font-heading), var(--font-sans), sans-serif',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
    },
    subtitle1: {
      fontFamily: 'var(--font-heading), var(--font-sans), sans-serif',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle2: {
      fontFamily: 'var(--font-heading), var(--font-sans), sans-serif',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    button: {
      fontWeight: 600,
      fontSize: '0.95rem',
      letterSpacing: '-0.01em',
    },
    body1: {
      lineHeight: 1.68,
      fontSize: '1rem',
    },
    body2: {
      lineHeight: 1.6,
      fontSize: '0.9rem',
    },
    overline: {
      fontFamily: 'var(--font-heading), var(--font-sans), sans-serif',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
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
          borderRadius: 10,
          paddingInline: 20,
          minHeight: 44,
          boxShadow: 'none',
        },
        containedPrimary: {
          backgroundColor: '#1473CC',
          color: '#FFFFFF',
          boxShadow: '0 2px 4px rgba(20, 115, 204, 0.2), 0 6px 18px rgba(20, 115, 204, 0.24)',
          '&:hover': {
            backgroundColor: '#0D5CA8',
            boxShadow: '0 4px 8px rgba(20, 115, 204, 0.25), 0 10px 24px rgba(20, 115, 204, 0.3)',
          },
        },
        outlinedPrimary: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: 'rgba(20, 115, 204, 0.38)',
          borderWidth: 1.5,
          color: '#1473CC',
          '&:hover': {
            borderWidth: 1.5,
            borderColor: '#1473CC',
            backgroundColor: 'rgba(20, 115, 204, 0.06)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
          border: '1px solid rgba(15, 37, 62, 0.08)',
          boxShadow: '0 1px 3px rgba(15, 37, 62, 0.04), 0 6px 18px -4px rgba(15, 37, 62, 0.05)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          maxWidth: '100%',
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const cache = useMemo(() => createEmotionCache(), []);
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
