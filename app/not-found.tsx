import { Box, Button, Container, Typography } from '@mui/material';
import { SearchOff } from '@mui/icons-material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
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
        <SearchOff 
          sx={{ 
            fontSize: 80, 
            color: 'primary.main', 
            mb: 2 
          }} 
        />
        
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
          Page Not Found
        </Typography>
        
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '4rem', md: '6rem' },
            fontWeight: 700,
            color: 'primary.main',
            lineHeight: 1,
            mb: 2
          }}
        >
          404
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ mb: 4, maxWidth: 600 }}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          The page may have been moved, deleted, or you may have entered an incorrect URL.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            href="/"
            size="large"
          >
            Go Home
          </Button>
          
          <Button
            variant="outlined"
            color="primary"
            href="#programs"
            size="large"
          >
            View Programs
          </Button>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Need help? Contact us at{' '}
            <Box
              component="a"
              href="https://www.instagram.com/yeshelpnetwork"
              target="_blank"
              rel="noopener noreferrer nofollow"
              sx={{ 
                color: 'primary.main', 
                textDecoration: 'underline',
                fontWeight: 600
              }}
            >
              @yeshelpnetwork
            </Box>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
