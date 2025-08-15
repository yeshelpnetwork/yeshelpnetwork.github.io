# Yes Help Network

A youth empowerment platform dedicated to addressing domestic and family violence through early intervention, mentorship, and community engagement.

## About

Yes Help Network connects young people with resources, mentorship opportunities, and skills training to build confidence and create positive futures. Our mission focuses on trauma-informed care and domestic violence prevention through community-based approaches.

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Material-UI (MUI) + Tailwind CSS
- **Deployment**: Static export optimized for GitHub Pages
- **Security**: Comprehensive security headers and CSP implementation

## Features

- 🛡️ **Security-first**: Advanced security headers, CSP, and secure coding practices
- 🔍 **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap generation
- ♿ **Accessible**: WCAG-compliant design with proper ARIA labels and focus management
- 📱 **Responsive**: Mobile-first design that works across all device sizes
- ⚡ **Performance**: Optimized images, lazy loading, and minimal JavaScript bundle

## Development

### Prerequisites
- Node.js 20 or higher
- npm (included with Node.js)

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

### Project Structure
```
app/
├── page.tsx           # Homepage with hero, programs, and events
├── layout.tsx         # Root layout with metadata and theme
├── error.tsx          # Error boundary component
├── not-found.tsx      # 404 page
├── globals.css        # Global styles and animations
├── theme/
│   └── ThemeRegistry.tsx  # MUI theme configuration
└── ui/
    └── HeaderBar.tsx      # Navigation component
```

## Deployment

This project is configured for static export and GitHub Pages deployment:

1. Build generates a static site in the `out/` directory
2. Site includes comprehensive sitemap and robots.txt
3. All security headers are pre-configured
4. Images are optimized for static hosting

## Dependency Management & Security

### Dependabot Configuration
This project uses Dependabot for automated dependency updates with the following safety measures:

- **Conservative Updates**: Only minor and patch updates are auto-merged
- **Major Version Control**: Major updates require manual review
- **Security First**: Security updates are always allowed regardless of semver
- **Grouped Updates**: Related packages are updated together to prevent conflicts
- **Limited PRs**: Maximum of 3 open dependency PRs at once

### Critical Dependencies Requiring Manual Review
- **React/Next.js**: Major versions often include breaking changes
- **MUI Components**: Theme and API changes can break styling
- **TypeScript**: Stricter checking can cause build failures
- **ESLint**: Rule changes can break CI/CD pipelines

### Monitoring & Maintenance
- Weekly automated security audits via GitHub Actions
- CodeQL analysis for vulnerability detection
- TruffleHog scanning for exposed secrets
- Comprehensive testing before dependency merges

## Contributing

This is a community-focused project. We welcome contributions that align with our mission of youth empowerment and violence prevention.

### Dependency Update Guidelines
1. **Test Locally**: Always test dependency updates in a local environment
2. **Check Breaking Changes**: Review changelogs for breaking changes
3. **Update Tests**: Ensure all tests pass with new dependencies
4. **Monitor CI**: Watch GitHub Actions for any failures
5. **Gradual Rollout**: Update dependencies in small, focused groups

## License

This project is proprietary. All rights reserved by Yes Help Network.

## Connect

- **Website**: [yeshelpnetwork.github.io](https://yeshelpnetwork.github.io)
- **Instagram**: [@yeshelpnetwork](https://www.instagram.com/yeshelpnetwork)

---

Built by www.bashdemy.com with ❤️ for youth empowerment and community safety.
