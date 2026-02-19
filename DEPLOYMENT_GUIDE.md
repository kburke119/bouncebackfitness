# Bounce Back Fitness - Netlify Deployment Guide

## Quick Start

### 1. Prerequisites
- Node.js 18+ installed
- A free [Netlify](https://netlify.com) account
- A [GitHub](https://github.com) account

### 2. Local Development

```bash
npm install
npm run dev
```

The site will be available at http://localhost:5173

### 3. Build for Production

```bash
npm run build
```

This creates a `dist/` folder with the production-ready static site.

### 4. Preview the Build Locally

```bash
npx vite preview
```

---

## Deploy to Netlify

### Option A: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Bounce Back Fitness - Netlify deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/bounce-back-fitness.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Select GitHub and choose your repository
   - Build settings will be auto-detected from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. Your site will be live at `https://your-site-name.netlify.app`

### Option B: Manual Deploy (Drag & Drop)

1. Run `npm run build` locally
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder to the deploy area
4. Your site is live immediately

---

## Custom Domain Setup (bouncebackfit.com)

1. In Netlify Dashboard, go to **Domain management**
2. Click **Add custom domain**
3. Enter `bouncebackfit.com`
4. Add DNS records at your domain registrar:
   - **Option A (Recommended):** Point nameservers to Netlify's DNS
   - **Option B:** Add a CNAME record pointing to your Netlify site URL

5. Add `www.bouncebackfit.com` as well - Netlify will handle the www-to-non-www redirect automatically

6. Enable HTTPS (free) in **Domain management > HTTPS**

---

## Project Structure

```
bounce-back-fitness/
├── client/
│   ├── public/           # Static files (robots.txt, sitemap.xml, favicon, etc.)
│   ├── src/
│   │   ├── assets/       # Images (logos, hero, smoothie photos)
│   │   ├── components/   # React components (footer, navigation, sections)
│   │   ├── pages/        # Page components (bounce-back-fitness.tsx)
│   │   ├── lib/          # Utilities
│   │   ├── hooks/        # Custom hooks
│   │   ├── App.tsx       # Root app component
│   │   ├── main.tsx      # Entry point
│   │   └── index.css     # Global styles
│   └── index.html        # HTML template with SEO meta tags
├── shared/               # Shared TypeScript types
├── netlify.toml          # Netlify build configuration
├── vite.config.ts        # Vite build configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── DEPLOYMENT_GUIDE.md   # This file
```

---

## External Services Used

| Service | Purpose | URL |
|---------|---------|-----|
| Square Booking | Appointment scheduling | https://book.squareup.com/appointments/djulcbvblq3mzy/location/4SBNWX3643KXJ/services |
| Google Forms | Contact form (Bounce.Back.Fit.NJ@gmail.com) | Embedded iframe |
| YouTube | Promotional video | Embedded iframe |
| Google Analytics | Website analytics | Configured in index.html |

---

## Before Going Live Checklist

- [ ] Update JSON-LD phone number (replace `+1-PLACEHOLDER-PHONE` in `client/index.html`)
- [ ] Update JSON-LD postal codes for Woodbridge and Metuchen addresses
- [ ] Verify Google Analytics tracking ID is correct
- [ ] Test Square booking link works
- [ ] Test Google Forms submission works
- [ ] Set up custom domain in Netlify
- [ ] Enable HTTPS in Netlify
- [ ] Submit sitemap to Google Search Console (https://bouncebackfit.com/sitemap.xml)

---

## Updating Content

- **Text content**: Edit `client/src/pages/bounce-back-fitness.tsx`
- **Footer/brand links**: Edit `client/src/components/footer.tsx`
- **SEO meta tags**: Edit `client/index.html`
- **Sitemap**: Edit `client/public/sitemap.xml`
- **Images**: Replace files in `client/src/assets/`

After making changes, push to GitHub and Netlify will automatically rebuild and deploy.
