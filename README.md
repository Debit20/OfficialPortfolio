# Debjit Paul — Portfolio

A stunning dark-themed portfolio built with **Vite + React + Tailwind CSS + Ant Design**.

## ✨ Features

- Full-dark aesthetic with `#050508` base background
- Soft cyan (`#00d4ff`) × violet (`#7c3aed`) × ember (`#ff6b35`) gradient palette
- Smooth scroll-reveal animations on every section
- Typewriter hero tagline effect
- Parallax mouse-tracking on the hero
- Animated skill progress bars (trigger on scroll)
- Glass-morphism cards with gradient borders
- Custom cursor with magnetic ring (desktop)
- Responsive for mobile, tablet, desktop
- Grid background texture + noise overlay

## 📁 File Structure

```
debjit-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── photo1.png        ← Your portrait photos
│   │   └── photo2.png
│   ├── components/
│   │   ├── Navbar.jsx        ← Sticky nav with active section tracking
│   │   ├── Hero.jsx          ← Typewriter + parallax + stats strip
│   │   ├── About.jsx         ← Photo + bio + methodologies
│   │   ├── Experience.jsx    ← Timeline for work & education
│   │   ├── Skills.jsx        ← Animated progress bars + tech bubbles
│   │   ├── Projects.jsx      ← Project cards with metrics
│   │   ├── Contact.jsx       ← Contact form + info cards
│   │   ├── Footer.jsx        ← Simple footer
│   │   └── CustomCursor.jsx  ← Custom cursor (desktop)
│   ├── data/
│   │   └── portfolio.js      ← 🔧 ALL content lives here — edit this!
│   ├── hooks/
│   │   └── useScrollReveal.js ← IntersectionObserver scroll animation hook
│   ├── App.jsx
│   ├── index.css             ← Global styles, CSS vars, animations
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output goes to /dist — deploy this folder
npm run preview  # preview the production build locally
```

## ✏️ Customization

### Update Content
All text content lives in **`src/data/portfolio.js`**:
- `personal` — name, email, phone, LinkedIn, summary
- `skills` — skill names + percentage levels
- `experience` — work history with highlights
- `education` — education details
- `projects` — project cards
- `stats` — hero stats strip

### Change Color Palette
Edit CSS variables in **`src/index.css`** (`:root` block):
```css
--accent-cyan: #00d4ff;     /* primary accent */
--accent-purple: #7c3aed;   /* secondary accent */
--accent-violet: #a855f7;
--accent-green: #00ff88;
--accent-ember: #ff6b35;
```

### Update Photos
Replace the files in `src/assets/`:
- `photo1.png` — used in the Hero section (round profile photo)
- `photo2.png` — used in the About section (rectangular professional photo)

### Contact Form
The form is wired with a simulated delay. To connect real email sending:
1. Install [EmailJS](https://emailjs.com): `npm install @emailjs/browser`
2. Replace the simulated `await` in `Contact.jsx → handleSubmit` with your EmailJS call.

## 🎨 Design Decisions

| Element | Choice | Why |
|---|---|---|
| Background | `#050508` | Deeper than pure black, avoids harsh contrast |
| Primary accent | `#00d4ff` (cyan) | Tech-forward, crisp on dark |
| Secondary | `#7c3aed` (violet) | Sophisticated depth |
| Highlight | `#00ff88` (green) | "Online / Available" feel |
| Fonts | Syne (headings) + DM Sans (body) + JetBrains Mono (code/labels) | Distinctive without being gimmicky |
| Animations | CSS transitions + IntersectionObserver | No heavy lib, smooth 60fps |

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` / `react-dom` | Core UI |
| `vite` + `@vitejs/plugin-react` | Build tooling |
| `tailwindcss` | Utility-first styling |
| `antd` + `@ant-design/icons` | UI components (Button, etc.) |
| `framer-motion` | (Available — use for extra animations) |

---

Built with ❤️ for Debjit Paul's portfolio.
