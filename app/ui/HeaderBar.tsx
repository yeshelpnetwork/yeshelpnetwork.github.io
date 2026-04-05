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
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'rgba(247, 252, 255, 0.78)',
        backdropFilter: 'blur(18px)',
        boxShadow: '0 10px 28px rgba(47, 99, 145, 0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, flexGrow: 1, minWidth: 0 }}>
            <Box
              aria-hidden="true"
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.88)',
                border: '1px solid rgba(255, 255, 255, 0.68)',
                boxShadow: '0 10px 24px rgba(62, 114, 160, 0.18)',
                overflow: 'hidden',
              }}
            >
              <Image src="/images/logo-mark.png" alt="" width={28} height={28} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="subtitle1" color="text.primary" sx={{ lineHeight: 1.05 }}>
                Yes Help Network
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Youth, art and wellbeing
              </Typography>
            </Box>
          </Box>
          <Box component="nav" aria-label="Primary" sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            {pages.map((p) => (
              <Button
                key={p.label}
                href={p.href}
                color="primary"
                sx={{
                  px: 1.75,
                  py: 0.75,
                  bgcolor: 'rgba(255, 255, 255, 0.76)',
                  border: '1px solid rgba(255, 255, 255, 0.68)',
                  boxShadow: '0 10px 24px rgba(62, 114, 160, 0.12)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.92)',
                    boxShadow: '0 14px 28px rgba(62, 114, 160, 0.14)',
                  },
                }}
              >
                {p.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
