'use client';

import * as React from 'react';
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
  { label: 'Contact', href: '#contact' },
];

export default function HeaderBar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
          <Box sx={{ width: 32, height: 32, bgcolor: 'primary.main', borderRadius: 1 }} />
          <Typography variant="h6" color="text.primary" sx={{ flexGrow: 1 }}>
            yeshelpnetwork
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            {pages.map((p) => (
              <Button key={p.label} href={p.href} color="primary" sx={{ textTransform: 'none' }}>
                {p.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


