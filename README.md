# Full-Stack Developer Portfolio

A modern, animated portfolio website built with Next.js and Framer Motion. Features a professional blue, black, and white color scheme perfect for showcasing your full-stack development skills on Upwork and other platforms.

![Portfolio Preview](https://img.shields.io/badge/Next.js-13.5-black?style=flat&logo=next.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-8.0-blue?style=flat&logo=framer)

## Features

- **Smooth Animations**: Powered by Framer Motion for professional transitions and interactions
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Modern UI**: Clean, professional design with gradient effects and glassmorphism
- **Optimized Performance**: Built with Next.js for fast load times and SEO
- **Interactive Components**: Hover effects, scroll animations, and smooth navigation
- **Skills Showcase**: Animated tech stack display organized by category
- **Project Portfolio**: Featured projects with tech stack tags
- **Contact Section**: Multiple contact methods including Upwork, email, and social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
```bash
cd "My portfolio"
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

1. **Personal Details** ([pages/index.js](pages/index.js)):
   - Update the hero section with your name and tagline
   - Modify the About section with your background
   - Update stats (years of experience, projects completed, etc.)

2. **Projects** ([pages/index.js](pages/index.js)):
   - Replace the projects array with your real projects
   - Add project links, descriptions, and tech stacks

3. **Skills** ([components/Skills.js](components/Skills.js)):
   - Update the skillCategories array with your tech stack
   - Add or remove categories as needed

4. **Contact Information**:
   - Update Upwork profile URL in [pages/index.js](pages/index.js) (line 206)
   - Update email address in [pages/index.js](pages/index.js) (line 219)
   - Update social media links in [components/Footer.js](components/Footer.js)

5. **Brand Name** ([components/Header.js](components/Header.js)):
   - Update the logo/brand name

### Color Customization

All colors are defined as CSS variables in [styles/globals.css](styles/globals.css):

```css
:root {
  --blue: #0ea5e9;
  --blue-dark: #0284c7;
  --blue-light: #38bdf8;
  --black: #0a0e12;
  --white: #ffffff;
  --muted: #94a3b8;
}
```

## Project Structure

```
My portfolio/
├── components/
│   ├── Header.js          # Navigation header with smooth animations
│   ├── Footer.js          # Footer with social links
│   ├── ProjectCard.js     # Reusable project card component
│   └── Skills.js          # Skills section with animated tags
├── pages/
│   ├── _app.js            # App wrapper with layout
│   └── index.js           # Main page with all sections
├── styles/
│   └── globals.css        # Global styles and animations
└── package.json
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

## Technologies Used

- **Next.js 13.5** - React framework for production
- **Framer Motion 8.0** - Animation library
- **React 18.2** - JavaScript library for building UI
- **CSS3** - Modern styling with variables and gradients

## For Upwork

This portfolio is specifically designed to showcase your full-stack development skills on Upwork. Make sure to:

1. Update all placeholder content with your real information
2. Add links to your actual deployed projects
3. Include the deployed portfolio URL in your Upwork profile
4. Customize the projects section to highlight work relevant to your target clients
5. Add testimonials or client reviews if available

## License

This project is open source and available for personal use.

## Support

For issues or questions, feel free to open an issue on the repository.

---

Built with Next.js & Framer Motion
