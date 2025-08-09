import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './theme/ThemeRegistry';
import HeaderBar from './ui/HeaderBar';
import { Container, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'yeshelpnetwork | Youth Empowerment Platform',
  description: 'Empowering young people with resources, mentorship, and opportunities.',
  metadataBase: new URL('https://yeshelpnetwork.github.io'),
  openGraph: {
    title: 'yeshelpnetwork | Youth Empowerment Platform',
    description: 'Empowering young people with resources, mentorship, and opportunities.',
    url: 'https://yeshelpnetwork.github.io',
    siteName: 'yeshelpnetwork',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'yeshelpnetwork | Youth Empowerment Platform',
    description: 'Empowering young people with resources, mentorship, and opportunities.'
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
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: 'right' }}
              >
                © {new Date().getFullYear()} yeshelpnetwork. All rights reserved.
              </Typography>
            </Container>
          </footer>
        </ThemeRegistry>
      </body>
    </html>
  );
}


