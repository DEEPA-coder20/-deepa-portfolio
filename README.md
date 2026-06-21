# Deepa Tigalannavar — Portfolio Website

A world-class, modern, production-ready personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack
- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure
```
deepa-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky nav with active section highlight
│   │   ├── Hero.tsx           # Animated hero with typewriter effect
│   │   ├── About.tsx          # About section with highlight cards
│   │   ├── Skills.tsx         # Animated skill bars + tag cloud
│   │   ├── Projects.tsx       # Project cards with metrics
│   │   ├── Experience.tsx     # Timeline with Rubixe internship
│   │   ├── Education.tsx      # Education card
│   │   ├── Certifications.tsx # 5 industry certifications
│   │   ├── Achievements.tsx   # Key metrics grid
│   │   ├── Testimonials.tsx   # Testimonial cards
│   │   ├── Contact.tsx        # Contact form + social links
│   │   ├── Footer.tsx         # Footer with back-to-top
│   │   ├── LoadingScreen.tsx  # Branded loading animation
│   │   ├── BackToTop.tsx      # Floating back-to-top button
│   │   └── ThemeProvider.tsx  # Dark/light mode context
│   ├── lib/
│   │   └── data.ts            # All portfolio content (projects, skills, etc.)
│   ├── globals.css            # CSS variables + utility classes
│   ├── layout.tsx             # Root layout with SEO metadata
│   ├── page.tsx               # Main page composition
│   ├── sitemap.ts             # Auto-generated sitemap
│   └── robots.ts              # robots.txt
└── public/
    └── resume.pdf             # ← ADD YOUR RESUME HERE
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

## 🌐 Deploy to Vercel (Recommended)

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 2: GitHub → Vercel (Easiest)
1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Click **Deploy** — Vercel auto-detects Next.js
5. Your site is live in ~2 minutes!

## ✏️ Customisation

### Update your info
Edit `app/lib/data.ts` to update:
- Projects (title, description, tech tags, metrics, GitHub links)
- Skills and proficiency levels
- Certifications
- Achievements

### Add your resume PDF
Place your resume at `public/resume.pdf` — the Download CV button will serve it automatically.

### Update social links
Search for `deepatigalannavar` across files and replace with your actual GitHub/LinkedIn handles.

### Custom domain on Vercel
In Vercel dashboard → Settings → Domains → Add your domain.
Update the sitemap URL in `app/sitemap.ts` and `app/robots.ts`.

## 📸 Features
- ✅ Dark / Light mode toggle (persisted)
- ✅ Typewriter effect in Hero
- ✅ Smooth scroll animations (Framer Motion)
- ✅ Sticky navbar with active section highlighting
- ✅ Glassmorphism UI cards
- ✅ Animated skill progress bars
- ✅ Timeline experience section
- ✅ Loading animation on entry
- ✅ Back-to-top button
- ✅ SEO meta tags + Open Graph
- ✅ Auto sitemap + robots.txt
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Accessible (keyboard nav, aria-labels, reduced-motion)
