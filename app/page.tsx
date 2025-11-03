import { Box, Button, Container, Divider, Typography, Card, CardContent, CardActions, Stack, Chip } from '@mui/material';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Empowering young people to lead, create and thrive',
  description:
    'Yes Help Network connects youth in Sydney with mentorship, skills training, and opportunities to grow and lead.',
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
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Empowering young people to lead, create, and thrive',
    description:
      'Yes Help Network connects youth in Sydney with mentorship, skills training, and opportunities to grow and lead.',
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
      'Yes Help Network connects youth in Sydney with mentorship, skills training, and opportunities to grow and lead.',
    images: ['/images/hero-group.png'],
  },
};

export default function HomePage() {
  const eventUrl =
    'https://www.eventbrite.com.au/e/safe-spaces-for-real-conversations-tickets-1550262048519?aff=oddtdtcreator';

  const pastEvents = [
    {
      title: 'World Mental Health Day: Speed Friending',
      org: '@yeshelpnetwork × @headspaceparramatta',
      summary:
        'A fun, interactive afternoon to meet new people, build friendships and feel connected. Free snacks and goodie bags.',
      chips: ['Fri 10 Oct · 1:30–4:30 PM', 'Ages 12–17 & 18–25'],
      link: 'https://www.instagram.com/yeshelpnetwork',
      tags: ['#Community', '#Wellbeing'],
    },
    {
      title: 'Youth‑Led Festival: Wellbeing Journey',
      org: '@kuringgai_council',
      summary:
        'Talk on “Taking Steps on Your Wellbeing Journey” — aligning our work with youth empowerment and mental wellbeing.',
      chips: ['Talk', 'Youth‑led festival'],
      link: 'https://www.instagram.com/yeshelpnetwork',
      tags: ['#Wellbeing', '#Youth'],
    },
    {
      title: 'Under 25s Meetup @ SXSW Sydney',
      org: '@sxswsydney',
      summary:
        'A relaxed meetup to connect with other young people, share ideas and make the most of SXSW Unlocked.',
      chips: ['Wed 15 Oct · 4:30–5:30 PM', 'Tumbalong Park, Darling Harbour'],
      link: 'https://www.instagram.com/yeshelpnetwork',
      tags: ['#SXSWSydney'],
    },
  ];

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
          description: 'Empowering young people in Sydney with resources, mentorship, and opportunities to grow and lead.',
          url: 'https://yeshelpnetwork.com/',
          image: 'https://yeshelpnetwork.com/images/brand-lockup.png',
          logo: 'https://yeshelpnetwork.com/images/logo-mark.png',
          sameAs: [
            'https://yeshelpnetwork.com',
            'https://yeshelpnetwork.github.io',
            'https://www.instagram.com/yeshelpnetwork',
            'https://www.linkedin.com/company/yes-help-au/'
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Parramatta',
            addressRegion: 'NSW',
            addressCountry: 'AU',
          },
          foundingDate: '2023',
          '@id': 'https://yeshelpnetwork.com/#localbusiness',
          founder: {
            '@type': 'Person',
            name: 'Yeshal Mansoor',
            sameAs: [
              'https://www.linkedin.com/in/yeshal-mansoor/',
              'https://www.instagram.com/yeshelpnetwork'
            ]
          },
          keywords: [
            'youth empowerment',
            'youth help',
            'youth help sydney',
            'mentorship',
            'domestic violence prevention',
            'trauma awareness',
            'community engagement',
            'Yeshal Mansoor'
          ]
        })}
      </Script>
      <Script
        id="ld-json-founder"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Yeshal Mansoor',
          url: 'https://www.linkedin.com/in/yeshal-mansoor/',
          jobTitle: 'Founder',
          sameAs: [
            'https://www.linkedin.com/in/yeshal-mansoor/',
            'https://www.instagram.com/yeshelpnetwork'
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Yes Help Network',
            '@id': 'https://yeshelpnetwork.com/#organization'
          },
          knowsAbout: [
            'Youth Empowerment',
            'Community Engagement',
            'Domestic & Family Violence Prevention'
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
          url: 'https://yeshelpnetwork.com/',
          description: 'Youth empowerment platform in Sydney connecting young people with mentorship, skills training, and opportunities.',
          keywords: [
            'yes help network',
            'yeshelp network',
            'yeshelpnetwork',
            'yeshelpnetwork.com',
            'youth empowerment',
            'youth help',
            'youth help sydney',
            'mentorship program',
            'skills training',
            'domestic violence prevention',
            'trauma informed care',
            'community engagement',
            'Yeshal Mansoor'
          ],
          sameAs: [
            'https://yeshelpnetwork.com',
            'https://yeshelpnetwork.github.io',
            'https://www.instagram.com/yeshelpnetwork',
            'https://www.linkedin.com/company/yes-help-au/'
          ],
          '@id': 'https://yeshelpnetwork.com/#website',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://yeshelpnetwork.com/?q={search_term_string}',
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
          alternateName: [
            'YesHelpNetwork',
            'Yes Help Network',
            'YesHelp Network',
            'yeshelpnetwork',
            'yeshelpnetwork.com'
          ],
          url: 'https://yeshelpnetwork.com/',
          logo: 'https://yeshelpnetwork.com/images/logo-mark.png',
          description: 'Youth empowerment platform addressing domestic and family violence through early intervention, mentorship, and community engagement.',
          foundingDate: '2023',
          '@id': 'https://yeshelpnetwork.com/#organization',
          areaServed: {
            '@type': 'Place',
            name: 'Parramatta, NSW, Australia'
          },
          sameAs: [
            'https://yeshelpnetwork.com',
            'https://yeshelpnetwork.github.io',
            'https://www.instagram.com/yeshelpnetwork',
            'https://www.linkedin.com/company/yes-help-au/'
          ],
          founder: {
            '@type': 'Person',
            name: 'Yeshal Mansoor',
            sameAs: [
              'https://www.linkedin.com/in/yeshal-mansoor/'
            ]
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
                yeshelpnetwork connects youth in Sydney with mentorship, skills training, and real-world opportunities.
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

      <Box component="section" id="past-events" sx={{ py: { xs: 6, sm: 10 } }}>
        <Container>
          <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
            Past Events
          </Typography>
          <Box sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            mt: 2,
          }}>
            {pastEvents.map((evt) => (
              <Card
                key={evt.title}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: 'divider',
                  boxShadow: 1,
                  '&:hover': { boxShadow: 3, borderColor: 'primary.light' },
                }}
              >
                <Box sx={{ height: 4, bgcolor: 'primary.main', opacity: 0.8 }} />
                <CardContent sx={{ p: 2 }}>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    {evt.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {evt.org}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {evt.summary}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
                    {evt.chips.map((c) => (
                      <Chip key={c} label={c} size="small" variant="outlined" />
                    ))}
                  </Stack>
                  {evt.tags && evt.tags.length > 0 && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
                      {evt.tags.map((t) => (
                        <Chip key={t} label={t} size="small" color="primary" variant="filled" />
                      ))}
                    </Stack>
                  )}
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                  <Button
                    href={evt.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    size="small"
                    variant="text"
                    aria-label={`Open Instagram post for ${evt.title} (opens in a new tab)`}
                  >
                    View post
                  </Button>
                </CardActions>
              </Card>
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

              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900, mb: 2 }}>
                Yes Help Network was born from a personal turning point. At 21, our founder, Yeshal Mansoor, chose to step out of
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
                Want to sponsor a program, volunteer as a mentor, or partner with us? Connect on Instagram or LinkedIn.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ justifySelf: { sm: 'end' } }}>
                <Box
                  component="a"
                  href="https://www.instagram.com/yeshelpnetwork"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  sx={{ color: 'primary.main', textDecoration: 'underline', fontWeight: 600, whiteSpace: 'nowrap' }}
                  aria-label="Open Instagram profile @yeshelpnetwork (opens in a new tab)"
                >
                  @yeshelpnetwork
                </Box>
                <Box
                  component="a"
                  href="https://www.linkedin.com/company/yes-help-au/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  sx={{ color: 'primary.main', textDecoration: 'underline', fontWeight: 600, whiteSpace: 'nowrap' }}
                  aria-label="Open LinkedIn company page (opens in a new tab)"
                >
                  LinkedIn
                </Box>
              </Stack>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              Founder: <Box component="a" href="https://www.linkedin.com/in/yeshal-mansoor/" target="_blank" rel="noopener noreferrer nofollow" sx={{ color: 'primary.main', textDecoration: 'underline', fontWeight: 600 }}>Yeshal Mansoor</Box>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
