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
    primary: { main: '#2563eb' },
    secondary: { main: '#1e40af' },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#4b5563',
    },
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


