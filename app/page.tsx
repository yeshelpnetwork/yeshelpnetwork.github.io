import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import {
  BRAND_LOCKUP_URL,
  FOUNDER_LINKEDIN_URL,
  FOUNDER_SAME_AS,
  INSTAGRAM_URL,
  LINKEDIN_COMPANY_URL,
  LOCAL_BUSINESS_ID,
  LOGO_URL,
  ORGANIZATION_ID,
  ORGANIZATION_SAME_AS,
  SITE_URL,
  WEBSITE_ID,
} from './site';

const panelRadiusSx = { xs: '34px', sm: '42px' };
const cardRadius = '32px';
const insetCardRadius = '24px';
const mediaRadius = '28px';

const frostedPanelSx = {
  borderRadius: panelRadiusSx,
  bgcolor: 'rgba(255, 255, 255, 0.74)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: '0 24px 64px rgba(34, 87, 137, 0.14)',
  backdropFilter: 'blur(18px)',
};
const sectionShellSx = {
  ...frostedPanelSx,
  position: 'relative',
  overflow: 'hidden',
};
const insetCardSx = {
  p: { xs: 1.25, sm: 1.45 },
  borderRadius: insetCardRadius,
  bgcolor: 'rgba(255, 255, 255, 0.84)',
  border: '1px solid rgba(255, 255, 255, 0.74)',
  boxShadow: '0 16px 34px rgba(48, 110, 156, 0.14)',
  minWidth: 0,
};
const sectionSpacingSx = { xs: 5, sm: 6.75, md: 7.5 };
const panelPaddingSx = { xs: 2.75, sm: 3.5, md: 4 };
const panelPaddingWideSx = { xs: 3, sm: 4, md: 4.6 };
const cardPaddingSx = { xs: 2.1, sm: 2.45 };
const bodyCopySx = {
  minWidth: 0,
  overflowWrap: 'anywhere',
  lineHeight: 1.7,
};
const chipWrapSx = {
  height: 'auto',
  alignItems: 'flex-start',
  '& .MuiChip-label': {
    display: 'block',
    whiteSpace: 'normal',
    lineHeight: 1.35,
    py: 0.45,
  },
};
const softPillSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  px: 1.4,
  py: 0.8,
  borderRadius: '999px',
  bgcolor: 'rgba(255, 255, 255, 0.78)',
  border: '1px solid rgba(255, 255, 255, 0.66)',
  boxShadow: '0 12px 30px rgba(55, 107, 151, 0.12)',
};
const iconBubbleSx = {
  width: 44,
  height: 44,
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  bgcolor: 'rgba(255, 255, 255, 0.84)',
  border: '1px solid rgba(255, 255, 255, 0.68)',
  boxShadow: '0 12px 26px rgba(55, 107, 151, 0.12)',
};
const surfaceCardSx = {
  ...frostedPanelSx,
  borderRadius: cardRadius,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minWidth: 0,
  overflow: 'hidden',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(238, 248, 255, 0.74) 100%)',
  transition: 'transform 220ms ease, box-shadow 220ms ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 28px 60px rgba(34, 87, 137, 0.18)',
  },
};
const mediaFrameSx = {
  position: 'relative',
  borderRadius: mediaRadius,
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.72)',
  boxShadow: '0 16px 36px rgba(34, 87, 137, 0.12)',
};
const sectionCardGridSx = {
  display: 'grid',
  gap: { xs: 2.4, md: 2.8 },
  mt: 2.5,
  alignItems: 'stretch',
  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
};
type ProgramCard = {
  title: string;
  desc: string;
  kicker: string;
  imgSrc: string;
  imgAlt: string;
  imgFit: CSSProperties['objectFit'];
  imgPosition: string;
  imgFrameRatio: string;
  imgInset: string;
  imgBg: string;
};

function SectionHeading({
  label,
  title,
  description,
  compact = false,
  titleMaxWidth,
}: {
  label: string;
  title: string;
  description: string;
  compact?: boolean;
  titleMaxWidth?: number;
}) {
  return (
    <Box sx={{ mb: compact ? 2.75 : 3.4 }}>
      <Box
        sx={{
          ...softPillSx,
          px: compact ? 1.35 : 1.5,
          py: compact ? 0.65 : 0.75,
        }}
      >
        <Box component="span" aria-hidden="true" sx={{ fontSize: '1.1rem', lineHeight: 1 }}>
          ☁️
        </Box>
        <Typography variant="overline" sx={{ color: 'primary.dark' }}>
          {label}
        </Typography>
      </Box>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          typography: compact
            ? { xs: 'h5', sm: 'h5', md: 'h4' }
            : { xs: 'h4', sm: 'h4', md: 'h4' },
          fontWeight: 800,
          lineHeight: { xs: 1.08, sm: 1.04 },
          letterSpacing: '-0.02em',
          mt: compact ? 1.5 : 2,
          maxWidth: titleMaxWidth ?? 720,
          textWrap: 'balance',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ ...bodyCopySx, mt: compact ? 1 : 1.25, maxWidth: 610 }}
      >
        {description}
      </Typography>
    </Box>
  );
}

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
  const heroHighlights = ['Creative workshops', 'Safe conversations', 'Youth-led community'];
  const heroCards = [
    {
      title: 'Creative workshops',
      body: 'Art, stories, and practical skills.',
    },
    {
      title: 'Real conversations',
      body: 'Confidence, wellbeing, and connection.',
    },
    {
      title: 'Community meetups',
      body: 'Events that build community.',
    },
  ];
  const programs: ProgramCard[] = [
    {
      title: 'Workshops',
      desc: 'Hands-on sessions that build practical skills with mentors and peers.',
      kicker: 'Hands-on learning',
      imgSrc: '/images/insight-integrational-trauma.png',
      imgAlt: 'Insight infographic: Recognising intergenerational trauma',
      imgFit: 'contain',
      imgPosition: 'center center',
      imgFrameRatio: '16 / 11',
      imgInset: '14px',
      imgBg: '#fffaf4',
    },
    {
      title: 'Community Meetups',
      desc: 'Regular gatherings to connect, share ideas, and collaborate.',
      kicker: 'Belonging first',
      imgSrc: '/images/hero-group.png',
      imgAlt: 'Group photo from a community meetup',
      imgFit: 'cover',
      imgPosition: 'center 42%',
      imgFrameRatio: '16 / 11',
      imgInset: '0px',
      imgBg: '#eef7ff',
    },
    {
      title: 'Keynotes',
      desc: 'Talks from leaders and creators that spark action and learning.',
      kicker: 'Stories that stick',
      imgSrc: '/images/founder-portrait.png',
      imgAlt: 'Founder of Yes Help Network',
      imgFit: 'contain',
      imgPosition: 'center 32%',
      imgFrameRatio: '16 / 11',
      imgInset: '10px',
      imgBg: '#eef4ff',
    },
  ];
  const upcomingEvent = {
    sortDate: '2026-04-18',
    title: 'Youth Link-Up for Art, Stories & Wellbeing',
    org: 'Yes Help Network · Youth Week',
    summary:
      'Coffee art workshop, fun activities, free food, and empowering circles for young people in Parramatta.',
    chips: ['Sat 18 Apr 2026 · 2:00-5:00 PM', 'Parramatta (TBC)'],
    link: INSTAGRAM_URL,
    tags: ['#YouthWeek', '#Art', '#Wellbeing'],
    status: 'Upcoming',
    ctaLabel: 'Get updates',
    imgSrc: '/images/event-youth-link-up.png',
    imgAlt: 'Poster for Youth Link-Up for Art, Stories and Wellbeing',
    imgPosition: 'center 18%',
  };
  const pastEvents = [
    {
      sortDate: '2025-10-10',
      title: 'World Mental Health Day: Speed Friending',
      org: '@yeshelpnetwork x @headspaceparramatta',
      summary:
        'A fun, interactive afternoon to meet new people, build friendships and feel connected. Free snacks and goodie bags.',
      chips: ['Fri 10 Oct · 1:30-4:30 PM', 'Ages 12-17 & 18-25'],
      link: INSTAGRAM_URL,
      tags: ['#Community', '#Wellbeing'],
      imgSrc: '/images/hero-group.png',
      imgAlt: 'Group photo from a Yes Help Network event',
      imgPosition: 'center 38%',
    },
    {
      sortDate: null,
      title: 'Youth-Led Festival: Wellbeing Journey',
      org: '@kuringgai_council',
      summary:
        'Talk on "Taking Steps on Your Wellbeing Journey" - aligning our work with youth empowerment and mental wellbeing.',
      chips: ['Talk', 'Youth-led festival'],
      link: INSTAGRAM_URL,
      tags: ['#Wellbeing', '#Youth'],
      imgSrc: '/images/founder-portrait.png',
      imgAlt: 'Founder speaking about wellbeing and youth empowerment',
      imgPosition: 'center 20%',
    },
    {
      sortDate: '2025-10-15',
      title: 'Under 25s Meetup @ SXSW Sydney',
      org: '@sxswsydney',
      summary:
        'A relaxed meetup to connect with other young people, share ideas and make the most of SXSW Unlocked.',
      chips: ['Wed 15 Oct · 4:30-5:30 PM', 'Tumbalong Park, Darling Harbour'],
      link: INSTAGRAM_URL,
      tags: ['#SXSWSydney'],
      imgSrc: '/images/insight-integrational-trauma.png',
      imgAlt: 'Artwork used for a wellbeing-focused Yes Help Network event',
      imgPosition: 'center top',
    },
  ];
  const orderedPastEvents = [...pastEvents].sort((a, b) => {
    if (a.sortDate === b.sortDate) return 0;
    if (!a.sortDate) return 1;
    if (!b.sortDate) return -1;
    return a.sortDate.localeCompare(b.sortDate);
  });
  const displayedEvents = [
    upcomingEvent,
    ...orderedPastEvents.map((evt) => ({
      ...evt,
      status: undefined,
      ctaLabel: 'View post',
    })),
  ];

  return (
    <Box>
      <Script
        id="ld-json-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Yes Help Network',
          description:
            'Empowering young people in Sydney with resources, mentorship, and opportunities to grow and lead.',
          url: SITE_URL,
          image: BRAND_LOCKUP_URL,
          logo: LOGO_URL,
          sameAs: ORGANIZATION_SAME_AS,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Parramatta',
            addressRegion: 'NSW',
            addressCountry: 'AU',
          },
          foundingDate: '2023',
          '@id': LOCAL_BUSINESS_ID,
          founder: {
            '@type': 'Person',
            name: 'Yeshal Mansoor',
            sameAs: FOUNDER_SAME_AS,
          },
          keywords: [
            'youth empowerment',
            'youth help',
            'youth help sydney',
            'mentorship',
            'domestic violence prevention',
            'trauma awareness',
            'community engagement',
            'Yeshal Mansoor',
          ],
        })}
      </Script>
      <Script id="ld-json-founder" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Yeshal Mansoor',
          url: FOUNDER_LINKEDIN_URL,
          jobTitle: 'Founder',
          sameAs: FOUNDER_SAME_AS,
          worksFor: {
            '@type': 'Organization',
            name: 'Yes Help Network',
            '@id': ORGANIZATION_ID,
          },
          knowsAbout: [
            'Youth Empowerment',
            'Community Engagement',
            'Domestic & Family Violence Prevention',
          ],
        })}
      </Script>
      <Script id="ld-json-website" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Yes Help Network',
          url: SITE_URL,
          description:
            'Youth empowerment platform in Sydney connecting young people with mentorship, skills training, and opportunities.',
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
            'Yeshal Mansoor',
          ],
          sameAs: ORGANIZATION_SAME_AS,
          '@id': WEBSITE_ID,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
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
            'yeshelpnetwork.com',
          ],
          url: SITE_URL,
          logo: LOGO_URL,
          description:
            'Youth empowerment platform addressing domestic and family violence through early intervention, mentorship, and community engagement.',
          foundingDate: '2023',
          '@id': ORGANIZATION_ID,
          areaServed: {
            '@type': 'Place',
            name: 'Parramatta, NSW, Australia',
          },
          sameAs: ORGANIZATION_SAME_AS,
          founder: {
            '@type': 'Person',
            name: 'Yeshal Mansoor',
            sameAs: [FOUNDER_LINKEDIN_URL],
          },
          knowsAbout: [
            'Youth Empowerment',
            'Domestic Violence Prevention',
            'Trauma-Informed Care',
            'Community Engagement',
            'Mentorship Programs',
            'Skills Training',
          ],
          mission:
            'Addressing the impact of Domestic & Family Violence through early intervention and youth empowerment.',
        })}
      </Script>

      <Box component="section" sx={{ pt: { xs: 3, sm: 5 }, pb: { xs: 7, sm: 9 } }}>
        <Container>
          <Box
            sx={{
              ...sectionShellSx,
              p: panelPaddingWideSx,
              display: 'grid',
              gap: { xs: 3.2, md: 4.6 },
              alignItems: 'center',
              gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: 'absolute',
                right: -80,
                bottom: -100,
                width: 280,
                height: 280,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(255, 213, 79, 0.36) 0%, rgba(255, 213, 79, 0) 72%)',
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box
                sx={{
                  ...softPillSx,
                  px: 1.5,
                  py: 0.75,
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <Box component="span" aria-hidden="true" sx={{ fontSize: '1.1rem', lineHeight: 1 }}>
                  ☁️
                </Box>
                <Typography variant="overline" sx={{ color: 'primary.dark' }}>
                  Youth-led support across Sydney
                </Typography>
              </Box>
              <Typography
                component="h1"
                sx={{
                  typography: { xs: 'h5', sm: 'h4', md: 'h3' },
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: '-0.02em',
                  mt: 2.25,
                  maxWidth: 520,
                  textWrap: 'balance',
                }}
              >
                Empowering young people to lead, create and thrive
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ ...bodyCopySx, mt: 1.4, maxWidth: 560 }}
              >
                Yes Help Network connects young people in Sydney with mentorship, skills training,
                and community-led opportunities to grow in confidence, build connection, and step
                into leadership.
              </Typography>
              <Stack direction="row" spacing={1.1} useFlexGap flexWrap="wrap" sx={{ mt: 2.75 }}>
                {heroHighlights.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      ...softPillSx,
                      px: 1.4,
                      py: 0.9,
                      bgcolor: 'rgba(255, 255, 255, 0.74)',
                      border: '1px solid rgba(255, 255, 255, 0.62)',
                      boxShadow: '0 10px 24px rgba(55, 107, 151, 0.08)',
                    }}
                  >
                    <Box component="span" aria-hidden="true" sx={{ fontSize: '0.95rem', lineHeight: 1 }}>
                      ☁️
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 700 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Box
                sx={{
                  mt: 3.1,
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1.35,
                  minWidth: 0,
                  maxWidth: { xs: '100%', sm: 520 },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.25}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ minWidth: 0 }}
                >
                  <Button href="#programs" variant="contained" color="primary" size="large">
                    Explore Programs
                  </Button>
                  <Button
                    href="#events"
                    variant="outlined"
                    color="primary"
                    size="large"
                  >
                    Latest Event
                  </Button>
                </Stack>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ...bodyCopySx, pl: 0.25, pr: 1, maxWidth: 360 }}
                >
                  Want to collaborate?{' '}
                  <Box
                    component="a"
                    href="#contact"
                    sx={{ color: 'primary.main', fontWeight: 800, textDecoration: 'none' }}
                  >
                    Partner with us.
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box
                aria-hidden="true"
                sx={{
                  position: 'relative',
                  minHeight: { xs: 420, sm: 470 },
                  borderRadius: { xs: '34px', sm: '38px' },
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, #6ECBF5 0%, #9DE2FF 58%, #F4FBFF 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.76)',
                  boxShadow: '0 24px 64px rgba(32, 78, 122, 0.18)',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 24, sm: 28 },
                    left: { xs: 24, sm: 28 },
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    pr: 3,
                    maxWidth: { xs: '68%', sm: '72%' },
                  }}
                >
                  {['☁️ Youth-led', '☁️ Parramatta, NSW'].map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        ...softPillSx,
                        boxShadow: '0 10px 28px rgba(56, 112, 154, 0.12)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                        {tag}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  className="cloud-badge cloud-badge--hero cloud-badge--slow"
                  sx={{
                    position: 'absolute',
                    top: { xs: '16%', sm: '17%' },
                    right: { xs: 28, sm: 32 },
                    width: { xs: 64, sm: 72 },
                    height: { xs: 64, sm: 72 },
                    aspectRatio: '1 / 1',
                    overflow: 'hidden',
                    borderRadius: '50%',
                    clipPath: 'circle(50% at 50% 50%)',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.84)',
                    outline: '1px solid rgba(255, 255, 255, 0.88)',
                    boxShadow: '0 18px 30px rgba(48, 110, 156, 0.18)',
                    fontSize: '2rem',
                  }}
                >
                  ☁️
                </Box>
                <Box
                  className="cloud-badge cloud-badge--hero cloud-badge--offset"
                  sx={{
                    position: 'absolute',
                    top: { xs: '29%', sm: '30%' },
                    left: { xs: '16%', sm: '15%' },
                    width: { xs: 48, sm: 56 },
                    height: { xs: 48, sm: 56 },
                    aspectRatio: '1 / 1',
                    overflow: 'hidden',
                    borderRadius: '50%',
                    clipPath: 'circle(50% at 50% 50%)',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.78)',
                    outline: '1px solid rgba(255, 255, 255, 0.84)',
                    boxShadow: '0 14px 26px rgba(48, 110, 156, 0.14)',
                    fontSize: '1.45rem',
                  }}
                >
                  ☁️
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 'auto -8% -18% -8%',
                    height: '42%',
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, #CFE580 0%, #84B144 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 24, sm: 28 },
                    bottom: { xs: 26, sm: 30 },
                    width: { xs: '40%', sm: '37%' },
                    maxWidth: 210,
                    aspectRatio: '4 / 4.6',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.82)',
                    boxShadow: '0 20px 42px rgba(36, 78, 118, 0.2)',
                    bgcolor: 'rgba(255, 255, 255, 0.78)',
                  }}
                >
                  <Image
                    src="/images/hero-group.png"
                    alt=""
                    fill
                    sizes="(max-width: 900px) 45vw, 250px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Stack
                  spacing={1.25}
                  sx={{
                    position: 'absolute',
                    right: { xs: 24, sm: 28 },
                    bottom: { xs: 24, sm: 28 },
                    width: { xs: '51%', sm: '47%' },
                    maxWidth: 286,
                    minWidth: { xs: 194, sm: 220 },
                  }}
                >
                  {heroCards.map((card) => (
                    <Box
                      key={card.title}
                      sx={{
                        ...insetCardSx,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: { xs: '0.98rem', sm: '1.02rem' },
                          fontWeight: 800,
                          color: 'primary.dark',
                          textWrap: 'pretty',
                          lineHeight: 1.15,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          ...bodyCopySx,
                          color: 'text.secondary',
                          display: 'block',
                          mt: 0.5,
                          fontSize: { xs: '0.76rem', sm: '0.8rem' },
                          lineHeight: 1.45,
                        }}
                      >
                        {card.body}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="programs" sx={{ py: sectionSpacingSx }}>
        <Container>
          <SectionHeading
            label="Programs"
            title="Programs built for learning, connection, and confidence"
            description="Explore our workshops, community meetups, and keynotes designed to feel safe, practical, and welcoming."
            titleMaxWidth={980}
          />
          <Box sx={sectionCardGridSx}>
            {programs.map((item) => (
              <Box
                key={item.title}
                sx={{
                  ...surfaceCardSx,
                  p: cardPaddingSx,
                  gap: 1.15,
                  pb: { xs: 2.2, sm: 2.5 },
                }}
              >
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="space-between"
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ minWidth: 0, gap: 1, mb: 0.25 }}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      ...iconBubbleSx,
                      fontSize: '1.15rem',
                    }}
                  >
                    ☁️
                  </Box>
                  <Chip
                    label={item.kicker}
                    size="small"
                    sx={{
                      ...chipWrapSx,
                      maxWidth: '100%',
                      bgcolor: 'rgba(255, 213, 79, 0.34)',
                      border: '1px solid rgba(255, 213, 79, 0.56)',
                      color: 'warning.dark',
                    }}
                  />
                </Stack>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    typography: { xs: 'h6', sm: 'h5' },
                    fontWeight: 700,
                    lineHeight: 1.14,
                    minWidth: 0,
                    textWrap: 'pretty',
                    overflowWrap: 'anywhere',
                    pr: 0.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    ...mediaFrameSx,
                    mt: 0.4,
                    aspectRatio: item.imgFrameRatio,
                    bgcolor: item.imgBg,
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: item.imgInset,
                      borderRadius: item.imgFit === 'contain' ? '22px' : 0,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      style={{
                        objectFit: item.imgFit,
                        objectPosition: item.imgPosition,
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ...bodyCopySx, mt: 0.35, minWidth: 0, pr: 0.5 }}
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" id="events" sx={{ py: sectionSpacingSx }}>
        <Container>
          <SectionHeading
            label="Events"
            title="Upcoming and recent events"
            description="See what is coming up next and look back at the gatherings that have already brought young people together."
            titleMaxWidth={920}
          />
          <Box sx={sectionCardGridSx}>
            {displayedEvents.map((evt) => (
              <Card
                key={evt.title}
                sx={{
                  ...surfaceCardSx,
                  gridColumn: evt.status ? { xs: 'span 1', sm: 'span 2', md: 'span 2' } : undefined,
                  position: 'relative',
                  background:
                    evt.status
                      ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(247, 250, 223, 0.82) 100%)'
                      : 'linear-gradient(180deg, rgba(255, 255, 255, 0.86) 0%, rgba(238, 248, 255, 0.78) 100%)',
                  border: evt.status
                    ? '1px solid rgba(255, 213, 79, 0.52)'
                    : '1px solid rgba(255, 255, 255, 0.6)',
                }}
              >
                <Box
                  sx={{
                    ...mediaFrameSx,
                    aspectRatio: evt.status ? '2.2 / 1' : '16 / 10',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.68)',
                    bgcolor: 'rgba(255, 255, 255, 0.72)',
                    borderTopLeftRadius: cardRadius,
                    borderTopRightRadius: cardRadius,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    boxShadow: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderTop: 'none',
                  }}
                >
                  <Image
                    src={evt.imgSrc}
                    alt={evt.imgAlt}
                    fill
                    sizes={evt.status ? '(max-width: 900px) 100vw, 66vw' : '(max-width: 900px) 100vw, 33vw'}
                    style={{
                      objectFit: 'cover',
                      objectPosition: evt.imgPosition ?? 'center',
                    }}
                  />
                  <Box
                    aria-hidden="true"
                    sx={{
                      ...iconBubbleSx,
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      width: 36,
                      height: 36,
                      fontSize: '1rem',
                    }}
                  >
                    ☁️
                  </Box>
                </Box>
                <Box sx={{ height: 6, background: 'linear-gradient(90deg, #1674C8 0%, #FFD54F 100%)' }} />
                <CardContent
                  sx={{
                    p: evt.status ? { xs: 2, sm: 2.35 } : cardPaddingSx,
                    pr: evt.status ? { xs: 2.15, sm: 2.45 } : cardPaddingSx,
                    pb: 1.5,
                    flexGrow: 1,
                    minWidth: 0,
                  }}
                >
                  {evt.status && (
                    <Chip
                      label={evt.status}
                      size="small"
                      sx={{
                        ...chipWrapSx,
                        mb: 1.1,
                        bgcolor: 'rgba(255, 213, 79, 0.42)',
                        border: '1px solid rgba(255, 213, 79, 0.7)',
                        color: 'warning.dark',
                        fontWeight: 700,
                      }}
                    />
                  )}
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1rem', sm: evt.status ? '1.2rem' : '1.04rem' },
                      pr: 0.5,
                      minWidth: 0,
                      textWrap: evt.status ? 'balance' : 'pretty',
                      lineHeight: 1.22,
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {evt.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', minWidth: 0, overflowWrap: 'anywhere' }}
                  >
                    {evt.org}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ...bodyCopySx, mt: 1.1 }}>
                    {evt.summary}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1.25 }}>
                    {evt.chips.map((c) => (
                      <Chip
                        key={c}
                        label={c}
                        size="small"
                        variant="outlined"
                        sx={{
                          ...chipWrapSx,
                          bgcolor: 'rgba(255, 255, 255, 0.68)',
                          borderColor: 'rgba(79, 157, 224, 0.4)',
                        }}
                      />
                    ))}
                  </Stack>
                  {evt.tags.length > 0 && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1.1 }}>
                      {evt.tags.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={{
                            ...chipWrapSx,
                            bgcolor: 'rgba(255, 213, 79, 0.34)',
                            color: 'warning.dark',
                          }}
                        />
                      ))}
                    </Stack>
                  )}
                </CardContent>
                <CardActions
                  sx={{
                    px: evt.status ? { xs: 2, sm: 2.35 } : cardPaddingSx,
                    pb: evt.status ? { xs: 2, sm: 2.35 } : cardPaddingSx,
                    pt: 0.5,
                    mt: 'auto',
                  }}
                >
                  <Button
                    href={evt.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    size="small"
                    variant="text"
                    aria-label={`${evt.ctaLabel} for ${evt.title} (opens in a new tab)`}
                  >
                    {evt.ctaLabel}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.42)' }} />

      <Box component="section" id="about" sx={{ py: sectionSpacingSx }}>
        <Container>
          <Box
            sx={{
              ...sectionShellSx,
              p: panelPaddingWideSx,
              display: 'grid',
              gap: { xs: 3.5, md: 4.8 },
              alignItems: 'center',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 320px' },
            }}
          >
            <Box sx={{ minWidth: 0, pr: { md: 1.5 } }}>
              <SectionHeading
                label="About"
                title="Community care shaped by lived experience"
                description="Founder Yeshal Mansoor created Yes Help Network to turn community care into practical, creative, and welcoming support for young people."
                compact
                titleMaxWidth={460}
              />
              <Stack spacing={1.5} sx={{ maxWidth: '55ch' }}>
                <Typography variant="body1" color="text.secondary" sx={bodyCopySx}>
                  Through youth organisations, councils, and community initiatives, she has
                  focused on building spaces where young people feel encouraged, informed, and
                  supported.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={bodyCopySx}>
                  Yes Help Network brings that work together through workshops, wellbeing
                  conversations, and community events that build confidence, connection, and access
                  to practical support.
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ justifySelf: 'center', width: '100%', maxWidth: { xs: 288, md: 304 } }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  mx: 'auto',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '6px solid rgba(255, 255, 255, 0.72)',
                  boxShadow: '0 22px 48px rgba(34, 87, 137, 0.18)',
                  bgcolor: 'rgba(255, 255, 255, 0.72)',
                }}
              >
                <Box
                  className="cloud-badge cloud-badge--slow"
                  sx={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.84)',
                    boxShadow: '0 14px 26px rgba(55, 107, 151, 0.14)',
                    fontSize: '0.95rem',
                    zIndex: 1,
                  }}
                >
                  ☁️
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: '22px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    bgcolor: '#fff',
                  }}
                >
                  <Image
                    src="/images/founder-portrait.png"
                    alt="Founder of Yes Help Network"
                    fill
                    sizes="(max-width: 900px) 320px, 340px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: '50% 16%',
                      transform: 'scale(1.06)',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{ py: sectionSpacingSx }}>
        <Container>
          <Box
            sx={{
              ...sectionShellSx,
              p: panelPaddingSx,
              pb: { xs: 3.15, sm: 3.8, md: 4.2 },
            }}
          >
            <SectionHeading
              label="Connect"
              title="Bring a program, partnership, or mentoring idea to life"
              description="Want to sponsor a program, volunteer as a mentor, or partner with us? Reach out through the channels below and we will keep the conversation moving."
              compact
            />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
                alignItems: 'start',
                gap: { xs: 2.25, md: 3 },
              }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ ...bodyCopySx, maxWidth: 660 }}>
                We welcome partnerships, mentoring, and community collaborations that create real
                support and practical opportunities for young people across Sydney.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ justifySelf: { md: 'end' } }}>
                <Button
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  variant="contained"
                  color="primary"
                  aria-label="Open Instagram profile @yeshelpnetwork (opens in a new tab)"
                >
                  Instagram
                </Button>
                <Button
                  href={LINKEDIN_COMPANY_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  variant="outlined"
                  color="primary"
                  aria-label="Open LinkedIn company page (opens in a new tab)"
                >
                  LinkedIn
                </Button>
              </Stack>
            </Box>
            <Box
              sx={{
                ...softPillSx,
                mt: 2.4,
                px: 1.2,
                py: 0.7,
                maxWidth: 'fit-content',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Founder:
              </Typography>
              <Box
                component="a"
                href={FOUNDER_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer nofollow"
                sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 800 }}
              >
                Yeshal Mansoor
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
