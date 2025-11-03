/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yeshelpnetwork.com',
  generateRobotsTxt: true,
  outDir: 'out',
  trailingSlash: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/_next/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://yeshelpnetwork.com/sitemap.xml',
    ],
  },
};

