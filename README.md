# Bounce Back Fitness Website

Corrective exercise, functional training, and personalized coaching for Bounce Back Fitness — Woodbridge & Metuchen, NJ.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Radix UI / shadcn components
- Deployed on Netlify

## Local Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:5173`

## Deployment

Automatically deploys to Netlify on push to the `main` branch via the GitHub integration.

Build settings (auto-detected from `netlify.toml`):
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Project Structure

```
bouncebackfitness/
├── client/
│   ├── public/            # Static assets (favicon, robots.txt, sitemap.xml, _headers)
│   ├── src/
│   │   ├── assets/        # Images (logo, hero, brand partner logos)
│   │   ├── components/    # Reusable components (footer, shadcn UI)
│   │   ├── pages/         # Page component (bounce-back-fitness.tsx)
│   │   ├── lib/           # Utilities and query client
│   │   ├── hooks/         # Custom hooks
│   │   ├── App.tsx        # Root app with router
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Global styles & Tailwind base
│   └── index.html         # HTML template with SEO meta tags & JSON-LD
├── shared/                # Shared TypeScript schemas (zod)
├── netlify.toml           # Netlify build & redirect config
├── vite.config.ts         # Vite build configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Environment Variables

None required. All integrations use public URLs/embed codes.

## External Integrations

| Service | Purpose |
|---------|---------|
| Square Booking | Appointment scheduling (`book.squareup.com`) |
| Google Forms | Embedded contact form |
| YouTube | Embedded intro and testimonial videos |

## Content Updates

- **Text / sections** → `client/src/pages/bounce-back-fitness.tsx`
- **Footer brand links** → `client/src/components/footer.tsx`
- **SEO meta tags** → `client/index.html`
- **Business schema (phone, hours, address)** → `client/index.html` JSON-LD block
- **Sitemap** → `client/public/sitemap.xml`
- **Images** → `client/src/assets/` (imported in components) or `client/public/` (served directly)

## Before Going Live Checklist

- [ ] Replace `+1-PHONE-NUMBER` in `client/index.html` JSON-LD with the actual phone number
- [ ] Verify Square booking URL is correct
- [ ] Test Google Forms contact submission
- [ ] Submit sitemap to Google Search Console: `https://bouncebackfit.com/sitemap.xml`
- [ ] Verify custom domain is set and HTTPS enabled in Netlify

## Live Site

<https://bouncebackfit.com>
