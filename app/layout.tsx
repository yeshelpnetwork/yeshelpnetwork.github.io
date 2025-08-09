import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './theme/ThemeRegistry';
import HeaderBar from './ui/HeaderBar';
import { Container, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Yes Help Network',
  description: 'Connecting people to support, opportunities, and community.',
  metadataBase: new URL('https://yeshelpnetwork.github.io'),
  openGraph: {
    title: 'Yes Help Network',
    description: 'Connecting people to support, opportunities, and community.',
    url: 'https://yeshelpnetwork.github.io',
    siteName: 'Yes Help Network',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yes Help Network',
    description: 'Connecting people to support, opportunities, and community.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body>
        <ThemeRegistry>
          <HeaderBar />
          <main>{children}</main>
          <footer>
            <Container sx={{ py: 4 }}>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Empower. All rights reserved.
              </Typography>
            </Container>
          </footer>
        </ThemeRegistry>
      </body>
    </html>
  );
}


