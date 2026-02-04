# Modern Portfolio Website

A cutting-edge, high-performance portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a modern dark theme, smooth animations, and full responsiveness.

## 🚀 Features

- **Modern Design**: Clean, minimalist UI with dark/light theme toggle
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast load times with Next.js SSG and code splitting
- **Accessibility**: WCAG 2.1 compliant with semantic HTML and ARIA labels
- **SEO Friendly**: Optimized meta tags and structured data
- **Type Safe**: Built with TypeScript for better developer experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🏃 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Customize Your Data

Edit the `data/portfolio.ts` file with your personal information:

- **Personal Info**: Name, title, bio, location, contact details
- **Skills**: Your technical skills with proficiency levels
- **Work Experience**: Your professional experience
- **Education**: Your educational background
- **Projects**: Your portfolio projects (GitHub links, live demos, etc.)
- **Social Links**: Your social media profiles

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

### 5. Start Production Server

```bash
npm start
# or
yarn start
```

## 📝 Project Structure

```
myportfolioweb/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation and footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Experience.tsx     # Work experience timeline
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx     # Navigation bar
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx          # Skills visualization
│   └── ThemeProvider.tsx  # Theme context provider
├── data/                  # Data files
│   └── portfolio.ts       # Portfolio data (customize this!)
├── types/                 # TypeScript type definitions
│   └── index.ts           # Type interfaces
├── public/                # Static assets
└── ...config files        # Configuration files
```

## 🎨 Customization Guide

### Updating Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #3b82f6;      /* Primary color */
  --accent: #8b5cf6;       /* Accent color */
  /* ... other colors */
}
```

### Adding New Sections

1. Create a new component in `components/`
2. Add it to `app/page.tsx`
3. Add navigation link in `components/Navigation.tsx`

### Modifying Animations

Animations are handled by Framer Motion. Edit animation props in individual components to customize timing, easing, and effects.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build
   - Click "Deploy"

3. **Environment Variables** (if needed):
   - Add any environment variables in Vercel dashboard
   - They'll be available in your app automatically

### Deploy to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Manual Deployment

1. Build the project: `npm run build`
2. Export static files (if using static export):
   - Add `output: 'export'` to `next.config.mjs`
   - Run `npm run build`
   - Deploy the `out` folder to any static hosting service

## 🔧 CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      # Add Vercel deployment step here
```

## 📱 Performance Optimization

The portfolio is already optimized with:

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Next.js font optimization
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Bundle Analysis**: Use `npm run build` to see bundle sizes

## ♿ Accessibility

The portfolio includes:

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Screen reader friendly

## 🐛 Troubleshooting

### Build Errors

- Ensure Node.js version is 18 or higher
- Delete `node_modules` and `.next` folders, then reinstall
- Check TypeScript errors: `npm run build`

### Styling Issues

- Clear browser cache
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.ts` for content paths

### Animation Issues

- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser console for errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue on GitHub or contact [your-email@example.com](mailto:your-email@example.com).

---

**Built with ❤️ using Next.js and modern web technologies**
