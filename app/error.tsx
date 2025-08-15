'use client';

import { useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          py: 4,
        }}
      >
        <ErrorOutline 
          sx={{ 
            fontSize: 80, 
            color: 'error.main', 
            mb: 2 
          }} 
        />
        
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
          Something went wrong
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ mb: 4, maxWidth: 600 }}
        >
          We apologize for the inconvenience. An unexpected error has occurred. 
          Please try refreshing the page or contact us if the problem persists.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={reset}
            size="large"
          >
            Try Again
          </Button>
          
          <Button
            variant="outlined"
            color="primary"
            href="/"
            size="large"
          >
            Go Home
          </Button>
        </Box>

        {process.env.NODE_ENV === 'development' && error.message && (
          <Box
            sx={{
              mt: 4,
              p: 2,
              bgcolor: 'grey.100',
              borderRadius: 1,
              maxWidth: '100%',
              overflow: 'auto',
            }}
          >
            <Typography variant="caption" color="error.main">
              Development Error Details:
            </Typography>
            <Typography 
              variant="body2" 
              component="pre" 
              sx={{ 
                fontFamily: 'monospace', 
                fontSize: '0.75rem',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}
            >
              {error.message}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
