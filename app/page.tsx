"use client";
import * as React from 'react';
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import Image from 'next/image';

export default function HomePage() {

  return (
    <Box>
      <Box component="section" sx={{ py: { xs: 6, sm: 10 }, bgcolor: 'background.default' }}>
        <Container>
          <Box sx={{
            display: 'grid',
            gap: { xs: 6, md: 10 },
            alignItems: 'center',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          }}>
            <Box>
              <Typography component="h1" gutterBottom sx={{ typography: { xs: 'h4', md: 'h3' }, fontWeight: 700 }}>
                Empowering young people to lead, create, and thrive
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 700 }}>
                Empower connects youth with mentorship, skills training, and real-world opportunities.
                Join a community that helps you grow confidence and build a future you’re proud of.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mt: 3 }}>
                <Button href="#programs" variant="contained" color="primary" size="large">
                  Explore Programs
                </Button>
                <Button href="#contact" variant="outlined" color="primary" size="large">
                  Partner With Us
                </Button>
              </Box>
            </Box>
            <Box>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{
                  position: 'absolute',
                  inset: -16,
                  borderRadius: 4,
                  // Soft glow using Calm Sage -> Sunshine Yellow
                  background: 'linear-gradient(45deg, #CFE6DA, #F7D070)',
                  opacity: 0.6,
                  filter: 'blur(24px)',
                  zIndex: 0,
                }} />
                <Box sx={{
                  position: 'relative',
                  aspectRatio: '4 / 3',
                  width: '100%',
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  p: 3,
                  boxShadow: 3,
                  border: 1,
                  borderColor: 'divider',
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 2,
                }}>
                  {[
                    '#D64550', // primary main — red
                    '#4BAF8A', // secondary main — green
                    '#F7D070', // highlight — yellow
                    '#CFE6DA', // soft background — sage
                    '#FAF7F2', // neutral — off-white
                    '#333333', // text — charcoal
                    '#E97079', // primary light tint
                    '#75C6A8', // secondary light tint
                    '#FBE3A1', // yellow light tint
                  ].map((hex, idx) => (
                    <Box key={idx} sx={{ borderRadius: 1, bgcolor: hex }} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="programs" sx={{ py: { xs: 6, sm: 10 } }}>
        <Container>
          <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
            Programs
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            Practical pathways for growth — from leadership labs and tech bootcamps to community projects.
          </Typography>
          <Box sx={{ display: 'grid', gap: 3, mt: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' } }}>
            {[
              { title: 'Mentorship Circles', desc: 'Small-group mentoring with leaders in tech, arts, and entrepreneurship.' },
              { title: 'Skills Sprints', desc: 'Hands-on, project-based learning in design, coding, and media.' },
              { title: 'Impact Projects', desc: 'Youth-led initiatives that drive local change and social good.' },
            ].map((item) => (
              <Box key={item.title} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: 1, borderColor: 'divider', boxShadow: 1 }}>
                <Typography variant="h6" fontWeight={600}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Divider />

      <Box component="section" id="about" sx={{ py: { xs: 6, sm: 10 } }}>
        <Container>
          <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
            About
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
            We believe every young person deserves access to guidance, resources, and community. Empower is a
            platform built to unlock potential through shared learning and real-world experience.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Image
              src="/yeshelp-logo.jpg"
              alt="Yes Help Network logo"
              width={640}
              height={800}
              style={{ width: '100%', height: 'auto', maxWidth: 420, borderRadius: 8 }}
              priority
            />
          </Box>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{ py: { xs: 6, sm: 10 } }}>
        <Container>
          <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            Want to sponsor a program, volunteer as a mentor, or partner with us? Email
            <Box component="a" href="mailto:hello@empower.example" sx={{ ml: 0.5, color: 'primary.main', textDecoration: 'underline' }}>
              hello@empower.example
            </Box>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}


