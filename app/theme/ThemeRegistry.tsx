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
      main: '#1264B3',
      light: '#3B8CD9',
      dark: '#0D4E8F',
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
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F253E',
      secondary: '#4A657E',
    },
    divider: 'rgba(15, 37, 62, 0.08)',
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
          backgroundColor: '#1264B3',
          color: '#FFFFFF',
          boxShadow: '0 1px 2px rgba(18, 100, 179, 0.16), 0 4px 12px rgba(18, 100, 179, 0.12)',
          '&:hover': {
            backgroundColor: '#0D4E8F',
            boxShadow: '0 2px 4px rgba(18, 100, 179, 0.2), 0 6px 16px rgba(18, 100, 179, 0.18)',
          },
        },
        outlinedPrimary: {
          backgroundColor: '#FFFFFF',
          borderColor: 'rgba(18, 100, 179, 0.3)',
          borderWidth: 1.5,
          color: '#1264B3',
          '&:hover': {
            borderWidth: 1.5,
            borderColor: '#1264B3',
            backgroundColor: 'rgba(18, 100, 179, 0.04)',
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
