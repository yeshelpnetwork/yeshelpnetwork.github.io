'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Image from 'next/image';

const pages = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export default function HeaderBar() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid rgba(15, 37, 62, 0.08)',
        bgcolor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 1px 3px rgba(15, 37, 62, 0.02)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 68, gap: 2 }}>
          <Box
            component="a"
            href="#"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              flexGrow: 1,
              minWidth: 0,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: 38,
                height: 38,
                borderRadius: '10px',
                display: 'grid',
                placeItems: 'center',
                bgcolor: '#FFFFFF',
                border: '1px solid rgba(15, 37, 62, 0.08)',
                boxShadow: '0 1px 3px rgba(15, 37, 62, 0.05)',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image src="/images/logo-mark.png" alt="" width={26} height={26} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                variant="subtitle1"
                color="text.primary"
                sx={{ lineHeight: 1.15, fontWeight: 700 }}
              >
                Yes Help Network
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', fontSize: '0.78rem', lineHeight: 1.1 }}
              >
                Youth, art and wellbeing
              </Typography>
            </Box>
          </Box>
          <Box component="nav" aria-label="Primary" sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.75 }}>
            {pages.map((p) => {
              const isContact = p.label === 'Contact';
              if (isContact) {
                return (
                  <Button
                    key={p.label}
                    href={p.href}
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{
                      ml: 1,
                      px: 2,
                      py: 0.65,
                      minHeight: 38,
                      fontSize: '0.88rem',
                    }}
                  >
                    Partner with us
                  </Button>
                );
              }
              return (
                <Button
                  key={p.label}
                  href={p.href}
                  sx={{
                    px: 1.5,
                    py: 0.7,
                    minHeight: 38,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'text.secondary',
                    borderRadius: '8px',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(18, 100, 179, 0.06)',
                    },
                  }}
                >
                  {p.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
