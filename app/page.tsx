import { Box, Button, Container, Divider, Typography, Card, CardContent, CardActions, Stack, Chip } from '@mui/material';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Empowering young people to lead, create and thrive',
  description:
    'yeshelpnetwork connects youth with mentorship, skills training, and opportunities to grow and lead.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Empowering young people to lead, create, and thrive',
    description:
      'yeshelpnetwork connects youth with mentorship, skills training, and opportunities to grow and lead.',
    url: '/',
    images: [
      {
        url: '/images/hero-group.png',
        width: 1200,
        height: 630,
        alt: 'Youth community gathering at a Yes Help Network event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empowering young people to lead, create, and thrive',
    description:
      'yeshelpnetwork connects youth with mentorship, skills training, and opportunities to grow and lead.',
    images: ['/images/hero-group.png'],
  },
};

export default function HomePage() {
  const eventUrl =
    'https://www.eventbrite.com.au/e/safe-spaces-for-real-conversations-tickets-1550262048519?aff=oddtdtcreator';

  return (
    <Box>
      {/* Structured data: LocalBusiness + WebSite for rich results */}
      <Script
        id="ld-json-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Yes Help Network',
          description: 'Empowering young people with resources, mentorship, and opportunities to grow and lead.',
          url: 'https://yeshelpnetwork.github.io/',
          image: 'https://yeshelpnetwork.github.io/images/brand-lockup.png',
          logo: 'https://yeshelpnetwork.github.io/images/logo-mark.png',
          sameAs: [
            'https://www.instagram.com/yeshelpnetwork',
            'https://bashdemy.com'
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Parramatta',
            addressRegion: 'NSW',
            addressCountry: 'AU',
          },
          foundingDate: '2023',
          founder: {
            '@type': 'Person',
            name: 'Yeshal Mansoor',
            sameAs: 'https://bashdemy.com'
          },
          keywords: [
            'youth empowerment',
            'mentorship',
            'domestic violence prevention',
            'trauma awareness',
            'community engagement',
            'bashdemy',
            'Bazhena Dementyeva'
          ]
        })}
      </Script>
      <Script
        id="ld-json-website"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Yes Help Network',
          url: 'https://yeshelpnetwork.github.io/',
          description: 'Youth empowerment platform connecting young people with mentorship, skills training, and opportunities.',
          keywords: [
            'youth empowerment',
            'mentorship program',
            'skills training',
            'domestic violence prevention',
            'trauma informed care',
            'community engagement',
            'bashdemy.com',
            'Bazhena Dementyeva software engineer'
          ],
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://yeshelpnetwork.github.io/?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        })}
      </Script>
      <Script
        id="ld-json-organization"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NonProfitOrganization',
          name: 'Yes Help Network',
          alternateName: 'YesHelpNetwork',
          url: 'https://yeshelpnetwork.github.io/',
          logo: 'https://yeshelpnetwork.github.io/images/logo-mark.png',
          description: 'Youth empowerment platform addressing domestic and family violence through early intervention, mentorship, and community engagement.',
          foundingDate: '2023',
          areaServed: {
            '@type': 'Place',
            name: 'Parramatta, NSW, Australia'
          },
          sameAs: [
            'https://www.instagram.com/yeshelpnetwork',
            'https://bashdemy.com'
          ],
          founder: {
            '@type': 'Person',
            name: 'Yeshal Mansoor'
          },
          knowsAbout: [
            'Youth Empowerment',
            'Domestic Violence Prevention',
            'Trauma-Informed Care',
            'Community Engagement',
            'Mentorship Programs',
            'Skills Training'
          ],
          mission: 'Addressing the impact of Domestic & Family Violence through early intervention and youth empowerment.'
        })}
      </Script>
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
                Empowering young people to lead, create and thrive
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
                  ].map((hex) => (
                    <Box key={hex} sx={{ borderRadius: 1, bgcolor: hex }} />
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
            Explore our core offerings: Workshops, Community Meetups, and Keynotes.
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

      <Box component="section" id="events" sx={{ py: { xs: 6, sm: 10 } }}>
        <Container>
          <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
            Current Events
          </Typography>
          <Card
            sx={{
              mt: 2,
              overflow: 'hidden',
              borderRadius: 2,
              bgcolor: 'background.paper',
              border: 1,
              borderColor: 'divider',
              boxShadow: 1,
              transition: 'box-shadow 200ms ease, border-color 200ms ease',
              '&:hover': {
                boxShadow: 3,
                borderColor: 'primary.light',
              },
            }}
            aria-labelledby="event-ssrc-title"
          >
            <Box sx={{ height: 6, bgcolor: 'primary.main', opacity: 0.8 }} />
            <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
              <Typography id="event-ssrc-title" variant="h6" fontWeight={700} gutterBottom>
                Safe Spaces for Real Conversations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                By headspace Parramatta
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1.5 }}>
                <Chip label="Thu, Aug 21 · 6–7:30pm AEST" size="small" />
                <Chip label="Parramatta, NSW" size="small" variant="outlined" />
                <Chip label="Ages 16–25" size="small" variant="outlined" />
                <Chip label="Free bubble tea 🧋" size="small" />
              </Stack>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                A 90-minute, trauma-informed workshop for young people to connect, reflect, and speak openly about
                mental health. Facilitated by Yeshal Mansoor, founder of the Yes Help Network.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: { xs: 2.5, sm: 3 }, pb: 3, pt: 0 }}>
              <Button
                href={eventUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                variant="contained"
                color="primary"
                aria-label="Open Eventbrite listing for Safe Spaces for Real Conversations (opens in a new tab)"
              >
                Get tickets on Eventbrite
              </Button>
            </CardActions>
          </Card>
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

              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900, mb: 2 }}>
                Yes Help Network was born from a personal turning point. At 21, our founder, Yeshal, chose to step out of
                years of shyness to find her voice through youth organisations, councils, and community engagement. That
                journey revealed a mission that matters: <b>addressing the impact of Domestic & Family Violence (DFV)</b> through
                early intervention.
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
                Trauma affects mental, physical, emotional, and spiritual wellbeing, yet in many communities it remains
                taboo. Too many young people stay silent out of fear, shame, cultural barriers, or lack of awareness. We
                exist to start the conversation early and build a platform for awareness, empowerment, and prevention,
                equipping youth with mentors, skills, and community to speak up, heal, and lead.
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  mx: 'auto',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid rgba(0,0,0,0.06)',
                  boxShadow: 1,
                  bgcolor: 'background.paper',
                }}
              >
               
                <Box sx={{ position: 'absolute', inset: '12px', borderRadius: '50%', overflow: 'hidden', bgcolor: '#fff' }}>
                  <Image
                    src="/images/founder-portrait.png"
                    alt="Founder of Yes Help Network"
                    fill
                    sizes="(max-width: 900px) 320px, 420px"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center',
                      transform: 'translateX(8%)',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      

      

      <Box component="section" id="contact" sx={{ py: { xs: 6, sm: 10 } }}>
        <Container>
          <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
            Contact
          </Typography>
          <Box sx={{ mt: 1.5, border: 1, borderColor: 'divider', borderRadius: 2, p: { xs: 2, sm: 2.5 }, bgcolor: 'background.paper' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr auto' }, alignItems: 'center', gap: 2 }}>
              <Typography variant="body1" color="text.secondary">
                Want to sponsor a program, volunteer as a mentor, or partner with us? Connect on Instagram.
              </Typography>
              <Box
                component="a"
                href="https://www.instagram.com/yeshelpnetwork"
                target="_blank"
                rel="noopener noreferrer nofollow"
                sx={{ color: 'primary.main', textDecoration: 'underline', fontWeight: 600, whiteSpace: 'nowrap', justifySelf: { sm: 'end' } }}
                aria-label="Open Instagram profile @yeshelpnetwork (opens in a new tab)"
              >
                @yeshelpnetwork
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}


