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

## Contributing

This is a community-focused project. We welcome contributions that align with our mission of youth empowerment and violence prevention.

## License

This project is proprietary. All rights reserved by Yes Help Network.

## Connect

- **Website**: [yeshelpnetwork.github.io](https://yeshelpnetwork.github.io)
- **Instagram**: [@yeshelpnetwork](https://www.instagram.com/yeshelpnetwork)

---

Built with ❤️ for youth empowerment and community safety.
