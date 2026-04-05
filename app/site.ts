export const SITE_ROOT_URL = 'https://yeshelpnetwork.com';
export const SITE_URL = `${SITE_ROOT_URL}/`;
export const GITHUB_SITE_URL = 'https://yeshelpnetwork.github.io';

export const INSTAGRAM_URL = 'https://www.instagram.com/yeshelpnetwork';
export const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/company/yes-help-au/';
export const FOUNDER_LINKEDIN_URL = 'https://www.linkedin.com/in/yeshal-mansoor/';

export const ORGANIZATION_ID = `${SITE_URL}#organization`;
export const WEBSITE_ID = `${SITE_URL}#website`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}#localbusiness`;
export const LOGO_URL = `${SITE_URL}images/logo-mark.png`;
export const BRAND_LOCKUP_URL = `${SITE_URL}images/brand-lockup.png`;

export const ORGANIZATION_SAME_AS = [
  SITE_ROOT_URL,
  GITHUB_SITE_URL,
  INSTAGRAM_URL,
  LINKEDIN_COMPANY_URL,
] as const;

export const FOUNDER_SAME_AS = [FOUNDER_LINKEDIN_URL, INSTAGRAM_URL] as const;
