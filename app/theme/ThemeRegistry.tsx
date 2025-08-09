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
      insertionPoint = emotionInsertionPoint as unknown as HTMLElement;
    }
  }
  return createCache({ key: 'mui', insertionPoint, prepend: true });
}

const theme = createTheme({
  palette: {
    // Primary Brand Colour — Warm Ladybug Red
    primary: {
      main: '#D64550',
      light: '#E97079',
      dark: '#A93B44',
      contrastText: '#FFFFFF',
    },
    // Secondary Accent — Leaf Green
    secondary: {
      main: '#4BAF8A',
      light: '#75C6A8',
      dark: '#38866A',
      contrastText: '#0B2D1F',
    },
    // Highlight Accent — Sunshine Yellow (mapped to warning)
    warning: {
      main: '#F7D070',
      light: '#FBE3A1',
      dark: '#D9B960',
      contrastText: '#3A2E0D',
    },
    background: {
      // Neutral Base — Warm Off-White
      default: '#FAF7F2',
      paper: '#FFFFFF',
    },
    text: {
      // Text/Dark Accent — Charcoal Grey
      primary: '#333333',
      secondary: '#555555',
    },
    divider: '#E7E2DC',
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
  },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
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


