import type { Metadata, Viewport } from 'next';
import { Baloo_2, Nunito } from 'next/font/google';
import { Box, Container, Typography, Link as MUILink } from '@mui/material';
import './globals.css';
import ThemeRegistry from './theme/ThemeRegistry';
import HeaderBar from './ui/HeaderBar';
import SkyBackdrop from './ui/SkyBackdrop';
import { FOUNDER_LINKEDIN_URL, SITE_URL } from './site';

const bodyFont = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const displayFont = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  display: 'swap',
  weight: ['600', '700', '800'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6ECBF5',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Yes Help Network | Youth Empowerment Platform',
    template: '%s | Yes Help Network',
  },
  description:
    'Yes Help Network empowers young people in Sydney with resources, mentorship, and opportunities.',
  applicationName: 'Yes Help Network',
  keywords: [
    'yes help network',
    'yeshelp network',
    'yeshelpnetwork',
    'yeshelpnetwork.com',
    'youth empowerment',
    'youth help',
    'youth help sydney',
    'youth services sydney',
    'Yeshal Mansoor',
    'Yeshal Mansoor Yes Help Network',
    'mentorship',
    'skills training',
    'community',
    'prevention',
    'DFV awareness',
    'domestic violence prevention',
    'trauma informed care',
    'Parramatta',
    'Sydney',
    'Australia',
    'Bashdemy',
    'bashdemy.com',
    'Bazhena Dementyeva',
    'software engineer',
    'web development',
    'community platform development',
    'nonprofit technology solutions',
  ],
  authors: [
    { name: 'Yes Help Network' },
    { name: 'Yeshal Mansoor', url: FOUNDER_LINKEDIN_URL },
    { name: 'Bazhena Dementyeva', url: 'https://bashdemy.com' },
    { name: 'Bashdemy', url: 'https://bashdemy.com' },
  ],
  creator: 'Yes Help Network',
  generator: 'Bashdemy - Bazhena Dementyeva Software Engineer',
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
      'Yes Help Network empowers young people in Sydney with resources, mentorship, and opportunities.',
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
      'Yes Help Network empowers young people in Sydney with resources, mentorship, and opportunities.',
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
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        <meta name="emotion-insertion-point" content="" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="placeholder-for-google-search-console" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://bashdemy.com" />
      </head>
      <body className={bodyFont.className}>
        <SkyBackdrop />
        <ThemeRegistry>
          <div className="site-content">
            <HeaderBar />
            <main>{children}</main>
            <footer>
              <Container sx={{ pb: 4 }}>
                <Box
                  sx={{
                    px: { xs: 2.5, sm: 3 },
                    py: 3,
                    borderRadius: '30px',
                    bgcolor: 'rgba(255, 255, 255, 0.72)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 22px 52px rgba(34, 87, 137, 0.12)',
                    backdropFilter: 'blur(16px)',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr auto' },
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} yeshelpnetwork. All rights reserved.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ justifySelf: { sm: 'end' }, textAlign: { xs: 'left', sm: 'right' } }}
                  >
                    Built by{' '}
                    <MUILink
                      href="https://bashdemy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                    >
                      bashdemy
                    </MUILink>
                    <Box
                      component="span"
                      aria-hidden="true"
                      sx={{ ml: 0.5, fontSize: '0.9rem', verticalAlign: 'middle' }}
                    >
                      🤍
                    </Box>
                  </Typography>
                </Box>
              </Container>
            </footer>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
