import type { Metadata, Viewport } from 'next';
import './globals.css';
import ThemeRegistry from './theme/ThemeRegistry';
import HeaderBar from './ui/HeaderBar';
import { Container, Typography } from '@mui/material';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#D64550',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yeshelpnetwork.github.io'),
  title: {
    default: 'Yes Help Network | Youth Empowerment Platform',
    template: '%s | Yes Help Network',
  },
  description:
    'Empowering young people with resources, mentorship, and opportunities.',
  applicationName: 'Yes Help Network',
  keywords: [
    'youth empowerment',
    'mentorship',
    'skills training',
    'community',
    'prevention',
    'DFV awareness',
    'Parramatta',
    'Sydney',
    'Australia',
  ],
  authors: [{ name: 'Yes Help Network' }],
  creator: 'Yes Help Network',
  publisher: 'Yes Help Network',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Yes Help Network | Youth Empowerment Platform',
    description:
      'Empowering young people with resources, mentorship, and opportunities.',
    url: '/',
    siteName: 'Yes Help Network',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/hero-group.png',
        width: 1200,
        height: 630,
        alt: 'Youth community gathering at Yes Help Network event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yes Help Network | Youth Empowerment Platform',
    description:
      'Empowering young people with resources, mentorship, and opportunities.',
    site: '@yeshelpnetwork',
    images: ['/images/hero-group.png'],
  },
  category: 'Nonprofit',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
        <link rel="canonical" href="https://yeshelpnetwork.github.io/" />
      </head>
      <body>
        {/* Background floating ladybugs layer (decorative only) */}
        <div className="floating-bugs" aria-hidden="true">
          <span className="bug" style={{ left: '4%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '12%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '20%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '28%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '36%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '44%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '56%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '64%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '76%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '84%' }}><span className="emoji">🐞</span></span>
          <span className="bug" style={{ left: '92%' }}><span className="emoji">🐞</span></span>
        </div>

        <ThemeRegistry>
          <div className="site-content">
            <HeaderBar />
            <main>{children}</main>
            <footer>
              <Container sx={{ py: 4 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: 'right' }}
                >
                  {new Date().getFullYear()} yeshelpnetwork © All rights reserved.
                </Typography>
              </Container>
            </footer>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}


