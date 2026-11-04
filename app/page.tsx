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
import {
  PlaceOutlined,
  SchoolOutlined,
  GroupsOutlined,
  RecordVoiceOverOutlined,
  CalendarTodayOutlined,
  ArrowForward,
  CheckCircleOutline,
} from '@mui/icons-material';
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

const panelRadiusSx = { xs: '18px', sm: '24px' };
const cardRadius = '16px';
const insetCardRadius = '12px';
const mediaRadius = '12px';

const frostedPanelSx = {
  borderRadius: panelRadiusSx,
  bgcolor: 'rgba(255, 255, 255, 0.92)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.85)',
  boxShadow: '0 12px 36px rgba(28, 88, 142, 0.12)',
};
const sectionShellSx = {
  ...frostedPanelSx,
  position: 'relative',
  overflow: 'hidden',
};
const insetCardSx = {
  p: { xs: 1.5, sm: 1.75 },
  borderRadius: insetCardRadius,
  bgcolor: 'rgba(255, 255, 255, 0.92)',
  border: '1px solid rgba(18, 114, 204, 0.1)',
  boxShadow: '0 2px 8px rgba(32, 92, 145, 0.05)',
  minWidth: 0,
};
const sectionSpacingSx = { xs: 5, sm: 6.5, md: 7.5 };
const panelPaddingSx = { xs: 2.75, sm: 3.5, md: 4 };
const panelPaddingWideSx = { xs: 2.75, sm: 3.75, md: 4.5 };
const cardPaddingSx = { xs: 2, sm: 2.4 };
const bodyCopySx = {
  minWidth: 0,
  overflowWrap: 'anywhere',
  lineHeight: 1.68,
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
  gap: 0.85,
  px: 1.4,
  py: 0.55,
  borderRadius: '999px',
  bgcolor: 'rgba(255, 255, 255, 0.92)',
  border: '1px solid rgba(255, 255, 255, 0.75)',
  boxShadow: '0 2px 8px rgba(32, 92, 145, 0.06)',
};
const iconBubbleSx = {
  width: 40,
  height: 40,
  borderRadius: '10px',
  display: 'grid',
  placeItems: 'center',
  bgcolor: 'rgba(18, 114, 204, 0.09)',
  color: 'primary.main',
  flexShrink: 0,
};
const surfaceCardSx = {
  borderRadius: cardRadius,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minWidth: 0,
  overflow: 'hidden',
  bgcolor: '#FFFFFF',
  border: '1px solid rgba(255, 255, 255, 0.85)',
  boxShadow: '0 4px 20px rgba(32, 92, 145, 0.08)',
  transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 32px rgba(32, 92, 145, 0.14)',
  },
};
const mediaFrameSx = {
  position: 'relative',
  borderRadius: mediaRadius,
  overflow: 'hidden',
  border: '1px solid rgba(15, 37, 62, 0.08)',
};
const sectionCardGridSx = {
  display: 'grid',
  gap: { xs: 2.5, md: 3 },
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
    <Box sx={{ mb: compact ? 2.5 : 3.5 }}>
      <Box
        sx={{
          ...softPillSx,
          px: compact ? 1.25 : 1.4,
          py: compact ? 0.45 : 0.55,
          mb: 1.5,
        }}
      >
        <Box
          component="span"
          aria-hidden="true"
          sx={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            bgcolor: 'primary.main',
          }}
        />
        <Typography
          variant="overline"
          sx={{
            color: 'primary.dark',
            fontWeight: 700,
            letterSpacing: '0.12em',
            lineHeight: 1,
            fontSize: '0.74rem',
          }}
        >
          {label}
        </Typography>
      </Box>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          typography: compact
            ? { xs: 'h5', sm: 'h5', md: 'h4' }
            : { xs: 'h4', sm: 'h4', md: 'h3' },
          fontWeight: 800,
          lineHeight: { xs: 1.15, sm: 1.12 },
          letterSpacing: '-0.025em',
          maxWidth: titleMaxWidth ?? 720,
          textWrap: 'balance',
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          ...bodyCopySx,
          mt: 1.25,
          maxWidth: 620,
          fontSize: { xs: '0.95rem', sm: '1.02rem' },
        }}
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
    sortDate: '2026-04-24',
    title: 'Youth Link-Up for Art, Stories & Wellbeing',
    org: 'Yes Help Network · Youth Week',
    summary:
      'Coffee art workshop, fun activities, free food, and empowering circles for young people in Parramatta.',
    chips: ['Fri 24 Apr 2026 · 4:00-7:00 PM', 'Launch Pad, 6 Hassall St, Parramatta'],
    link: INSTAGRAM_URL,
    tags: ['#YouthWeek', '#Art', '#Wellbeing'],
    status: 'Featured Event',
    ctaLabel: 'Follow on Instagram',
    imgSrc: '/images/event-youth-link-up.png',
    imgAlt: 'Poster for Youth Link-Up for Art, Stories and Wellbeing',
    imgPosition: 'center 18%',
  };
  const pastEvents = [
    {
      sortDate: '2026-10-15',
      title: 'Comic Workshop: Storytelling & Mental Health',
      org: '@yeshelpnetwork x @inarchie',
      summary:
        'A creative Mental Health Month workshop exploring personal narratives and resilience through mini-comics, with no prior drawing experience needed.',
      chips: ['Thu 15 Oct 2026 · 6:00-8:30 PM', 'Launch Pad, Parramatta'],
      link: INSTAGRAM_URL,
      tags: ['#MentalHealthMonth', '#Comics', '#Wellbeing'],
      imgSrc: '/images/insight-integrational-trauma.png',
      imgAlt: 'Artwork from creative wellbeing workshop',
      imgPosition: 'center top',
    },
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

      {/* Hero Section */}
      <Box component="section" sx={{ pt: { xs: 3, sm: 4.5 }, pb: { xs: 6, sm: 8 } }}>
        <Container>
          <Box
            sx={{
              ...sectionShellSx,
              p: panelPaddingWideSx,
              display: 'grid',
              gap: { xs: 3.5, md: 5 },
              alignItems: 'center',
              gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FBFE 100%)',
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box
                sx={{
                  ...softPillSx,
                  px: 1.4,
                  py: 0.55,
                  mb: 2,
                }}
              >
                <Box
                  component="span"
                  aria-hidden="true"
                  sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'primary.main' }}
                />
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.dark', fontWeight: 700, fontSize: '0.74rem' }}
                >
                  Youth-led support across Sydney
                </Typography>
              </Box>
              <Typography
                component="h1"
                sx={{
                  typography: { xs: 'h4', sm: 'h3', md: 'h2' },
                  fontWeight: 800,
                  lineHeight: { xs: 1.14, sm: 1.08 },
                  letterSpacing: '-0.025em',
                  color: 'text.primary',
                  maxWidth: 540,
                  textWrap: 'balance',
                }}
              >
                Empowering young people to lead, create and thrive
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  ...bodyCopySx,
                  mt: 1.75,
                  maxWidth: 540,
                  fontSize: { xs: '0.98rem', sm: '1.06rem' },
                }}
              >
                Yes Help Network connects young people in Sydney with mentorship, skills training,
                and community-led opportunities to grow in confidence, build connection, and step
                into leadership.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2.75 }}>
                {heroHighlights.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      px: 1.35,
                      py: 0.65,
                      borderRadius: '8px',
                      bgcolor: 'rgba(18, 100, 179, 0.05)',
                      border: '1px solid rgba(18, 100, 179, 0.12)',
                    }}
                  >
                    <CheckCircleOutline
                      sx={{ fontSize: '1rem', color: 'primary.main' }}
                      aria-hidden="true"
                    />
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Box
                sx={{
                  mt: 3.25,
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1.5,
                  minWidth: 0,
                  maxWidth: { xs: '100%', sm: 520 },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
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
                  sx={{ ...bodyCopySx, pl: 0.25, pr: 1, maxWidth: 380 }}
                >
                  Want to collaborate?{' '}
                  <Box
                    component="a"
                    href="#contact"
                    sx={{ color: 'primary.main', fontWeight: 700, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    Partner with us.
                  </Box>
                </Typography>
              </Box>
            </Box>

            {/* Showcase Visual */}
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box
                sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: { xs: '18px', sm: '20px' },
                  border: '1px solid rgba(15, 37, 62, 0.08)',
                  boxShadow: '0 4px 20px -2px rgba(15, 37, 62, 0.07)',
                  p: { xs: 2, sm: 2.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.65,
                        px: 1.25,
                        py: 0.45,
                        borderRadius: '6px',
                        bgcolor: 'rgba(22, 163, 74, 0.08)',
                        border: '1px solid rgba(22, 163, 74, 0.2)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: '#16A34A',
                        }}
                      />
                      <Typography variant="caption" sx={{ fontWeight: 700, color: '#15803D' }}>
                        Youth-led
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1.25,
                        py: 0.45,
                        borderRadius: '6px',
                        bgcolor: 'rgba(18, 100, 179, 0.06)',
                        border: '1px solid rgba(18, 100, 179, 0.16)',
                      }}
                    >
                      <PlaceOutlined sx={{ fontSize: '0.9rem', color: 'primary.main' }} />
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                        Parramatta, NSW
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                    Sydney Community
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(15, 37, 62, 0.08)',
                    bgcolor: '#F1F5F9',
                  }}
                >
                  <Image
                    src="/images/youth-week-workshop.jpg"
                    alt="Youth community members participating in a creative workshop"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                    gap: 1.25,
                  }}
                >
                  {heroCards.map((card) => (
                    <Box
                      key={card.title}
                      sx={{
                        ...insetCardSx,
                        p: 1.35,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          color: 'primary.dark',
                          lineHeight: 1.2,
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
                          mt: 0.4,
                          fontSize: '0.78rem',
                          lineHeight: 1.4,
                        }}
                      >
                        {card.body}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box component="section" id="programs" sx={{ py: sectionSpacingSx }}>
        <Container>
          <SectionHeading
            label="Programs"
            title="Programs built for learning, connection, and confidence"
            description="Explore our workshops, community meetups, and keynotes designed to feel safe, practical, and welcoming."
            titleMaxWidth={980}
          />
          <Box sx={sectionCardGridSx}>
            {programs.map((item, index) => {
              const ProgramIcon =
                index === 0
                  ? SchoolOutlined
                  : index === 1
                    ? GroupsOutlined
                    : RecordVoiceOverOutlined;
              return (
                <Box
                  key={item.title}
                  sx={{
                    ...surfaceCardSx,
                    p: cardPaddingSx,
                    gap: 1.25,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ minWidth: 0, gap: 1, mb: 0.25 }}
                  >
                    <Box aria-hidden="true" sx={iconBubbleSx}>
                      <ProgramIcon sx={{ fontSize: '1.25rem' }} />
                    </Box>
                    <Chip
                      label={item.kicker}
                      size="small"
                      sx={{
                        ...chipWrapSx,
                        maxWidth: '100%',
                        bgcolor: 'rgba(18, 100, 179, 0.08)',
                        color: 'primary.dark',
                        fontWeight: 700,
                        fontSize: '0.78rem',
                      }}
                    />
                  </Stack>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      typography: { xs: 'h6', sm: 'h5' },
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: 'text.primary',
                      minWidth: 0,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      ...mediaFrameSx,
                      mt: 0.25,
                      aspectRatio: item.imgFrameRatio,
                      bgcolor: item.imgBg,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: item.imgInset,
                        borderRadius: item.imgFit === 'contain' ? '10px' : 0,
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
                    sx={{ ...bodyCopySx, mt: 0.5, minWidth: 0 }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Events Section */}
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
                sx={[
                  surfaceCardSx,
                  {
                    position: 'relative',
                  },
                  evt.status ? { gridColumn: { xs: 'span 1', sm: 'span 2', md: 'span 2' } } : {},
                ]}
              >
                <Box
                  sx={{
                    ...mediaFrameSx,
                    aspectRatio: evt.status ? { xs: '16 / 9', sm: '2.2 / 1' } : '16 / 10',
                    borderBottom: '1px solid rgba(15, 37, 62, 0.08)',
                    borderTopLeftRadius: cardRadius,
                    borderTopRightRadius: cardRadius,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    boxShadow: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderTop: 'none',
                    bgcolor: '#F8FAFC',
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
                  {evt.status && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.75,
                        px: 1.4,
                        py: 0.6,
                        borderRadius: '6px',
                        bgcolor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 2px 8px rgba(15, 37, 62, 0.1)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: '#16A34A',
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: 800, color: '#15803D', letterSpacing: '0.04em' }}
                      >
                        {evt.status.toUpperCase()}
                      </Typography>
                    </Box>
                  )}
                </Box>

                <CardContent
                  sx={{
                    p: evt.status ? { xs: 2.2, sm: 2.75 } : cardPaddingSx,
                    pb: 1.5,
                    flexGrow: 1,
                    minWidth: 0,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.05rem', sm: evt.status ? '1.25rem' : '1.05rem' },
                      color: 'text.primary',
                      pr: 0.5,
                      minWidth: 0,
                      textWrap: evt.status ? 'balance' : 'pretty',
                      lineHeight: 1.25,
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {evt.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', minWidth: 0, fontWeight: 500, overflowWrap: 'anywhere', mb: 1 }}
                  >
                    {evt.org}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ...bodyCopySx, mt: 0.75 }}>
                    {evt.summary}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1.5 }}>
                    {evt.chips.map((c) => {
                      const isDate = c.includes('Apr') || c.includes('Oct') || c.includes('Talk');
                      return (
                        <Chip
                          key={c}
                          icon={isDate ? <CalendarTodayOutlined sx={{ fontSize: '0.85rem !important' }} /> : <PlaceOutlined sx={{ fontSize: '0.85rem !important' }} />}
                          label={c}
                          size="small"
                          sx={{
                            ...chipWrapSx,
                            bgcolor: 'rgba(15, 37, 62, 0.04)',
                            border: '1px solid rgba(15, 37, 62, 0.08)',
                            fontSize: '0.78rem',
                            fontWeight: 500,
                          }}
                        />
                      );
                    })}
                  </Stack>
                  {evt.tags.length > 0 && (
                    <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap sx={{ mt: 1.25 }}>
                      {evt.tags.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={{
                            ...chipWrapSx,
                            bgcolor: 'rgba(18, 100, 179, 0.06)',
                            color: 'primary.dark',
                            fontSize: '0.74rem',
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Stack>
                  )}
                </CardContent>
                <CardActions
                  sx={{
                    px: evt.status ? { xs: 2.2, sm: 2.75 } : cardPaddingSx,
                    pb: evt.status ? { xs: 2.2, sm: 2.75 } : cardPaddingSx,
                    pt: 0.5,
                    mt: 'auto',
                  }}
                >
                  <Button
                    href={evt.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    size="small"
                    variant={evt.status ? 'contained' : 'text'}
                    color="primary"
                    endIcon={<ArrowForward sx={{ fontSize: '1rem !important' }} />}
                    aria-label={`${evt.ctaLabel} for ${evt.title} (opens in a new tab)`}
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    {evt.ctaLabel}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(15, 37, 62, 0.06)' }} />

      {/* About Section */}
      <Box component="section" id="about" sx={{ py: sectionSpacingSx }}>
        <Container>
          <Box
            sx={{
              ...sectionShellSx,
              p: panelPaddingWideSx,
              display: 'grid',
              gap: { xs: 3.5, md: 5 },
              alignItems: 'center',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 320px' },
            }}
          >
            <Box sx={{ minWidth: 0, pr: { md: 2 } }}>
              <SectionHeading
                label="About"
                title="Community care shaped by lived experience"
                description="Founder Yeshal Mansoor created Yes Help Network to turn community care into practical, creative, and welcoming support for young people."
                compact
                titleMaxWidth={480}
              />
              <Stack spacing={1.75} sx={{ maxWidth: '58ch' }}>
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
            <Box sx={{ justifySelf: 'center', width: '100%', maxWidth: { xs: 260, md: 280 } }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '4px solid #FFFFFF',
                    boxShadow: '0 8px 30px rgba(15, 37, 62, 0.12)',
                    bgcolor: '#FFFFFF',
                  }}
                >
                  <Image
                    src="/images/founder-portrait.png"
                    alt="Founder of Yes Help Network"
                    fill
                    sizes="(max-width: 900px) 260px, 280px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: '50% 16%',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    ...softPillSx,
                    px: 1.5,
                    py: 0.6,
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Yeshal Mansoor
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    · Founder
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box component="section" id="contact" sx={{ py: sectionSpacingSx }}>
        <Container>
          <Box
            sx={{
              ...sectionShellSx,
              p: panelPaddingSx,
              pb: { xs: 3.5, sm: 4 },
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
                gap: { xs: 2.5, md: 3 },
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
                mt: 3,
                px: 1.4,
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
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 700,
                  '&:hover': { textDecoration: 'underline' },
                }}
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
