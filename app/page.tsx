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
                yeshelpnetwork connects youth with mentorship, skills training, and real-world opportunities.
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
                    '#D64550',
                    '#4BAF8A',
                    '#F7D070',
                    '#CFE6DA',
                    '#FAF7F2',
                    '#333333',
                    '#E97079',
                    '#75C6A8',
                    '#FBE3A1',
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
            Explore our core offerings: Workshops, Community meetups, and Keynotes.
          </Typography>
          <Box sx={{ display: 'grid', gap: 3, mt: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' } }}>
            {[
              {
                title: 'Workshops',
                desc: 'Hands-on sessions to build practical skills with mentors and peers.',
                imgSrc: '/images/insight-integrational-trauma.png',
                imgAlt: 'Insight infographic: Recognising intergenerational trauma',
              },
              {
                title: 'Community Meetups',
                desc: 'Regular gatherings to connect, share projects, and collaborate.',
                imgSrc: '/images/hero-group.png',
                imgAlt: 'Group photo from a community meetup',
              },
              {
                title: 'Keynotes',
                desc: 'Talks from leaders and creators to inspire action and learning.',
                imgSrc: '/images/brand-lockup.png',
                imgAlt: 'Yes Help Network brand lockup',
              },
            ].map((item) => (
              <Box
                key={item.title}
                sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: 1, borderColor: 'divider', boxShadow: 1 }}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Box sx={{ my: 1.5, borderRadius: 1, overflow: 'hidden', border: 1, borderColor: 'divider' }}>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={640}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Divider />

      <Box component="section" id="about" sx={{ py: { xs: 6, sm: 10 } }}>
        <Container>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 3, md: 6 },
              alignItems: 'center',
              gridTemplateColumns: { xs: '1fr', md: '1fr 420px' },
            }}
          >
            <Box>
              <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
                About
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
                We believe every young person deserves access to guidance, resources, and community. yeshelpnetwork is a
                platform built to unlock potential through shared learning and real-world experience.
              </Typography>
            </Box>
            <Box>
              <Image
                src="/images/brand-lockup.png"
                alt="Yes Help Network logo lockup"
                width={900}
                height={540}
                style={{ width: '100%', height: 'auto', maxWidth: 460, borderRadius: 8 }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="founder" sx={{ py: { xs: 6, sm: 10 }, bgcolor: 'background.default' }}>
        <Container>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 4, md: 8 },
              alignItems: 'center',
              gridTemplateColumns: { xs: '1fr', md: '1fr 360px' },
            }}
          >
            <Box>
              <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
                Founder
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800 }}>
                Building Yes Help Network started with a simple idea: give young people the space, tools, and
                connections to say “yes” to themselves. Today, the work continues through workshops, school
                partnerships, and a growing community of mentors.
              </Typography>
            </Box>
            <Box>
              <Image
                src="/images/founder-portrait.png"
                alt="Founder of Yes Help Network"
                width={640}
                height={640}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '50%',
                  border: '4px solid rgba(0,0,0,0.06)',
                }}
              />
            </Box>
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
            <Box component="a" href="mailto:hello@yeshelpnetwork.example" sx={{ ml: 0.5, color: 'primary.main', textDecoration: 'underline' }}>
              hello@yeshelpnetwork.example
            </Box>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}


