# متجر الرياض - Next.js TypeScript

A modern, responsive website for Riyadh Mattress Store built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 and TypeScript
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🌐 RTL (Right-to-Left) support for Arabic
- ⚡ Fast performance with Next.js optimizations
- 🔧 Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Move your images to the public directory:
```bash
# Copy your images to the public folder
cp *.jfif public/
cp *.jpeg public/
cp *.png public/
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Products.tsx         # Products section
│   ├── Gallery.tsx          # Image gallery
│   ├── Testimonials.tsx     # Customer testimonials
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
│   ├── 1.jfif
│   ├── 2.jfif
│   ├── 3.jfif
│   ├── 4.jfif
│   ├── logopng.png
│   ├── logo1.jpeg
│   └── logo2.jpeg
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: #C1272D (Red)
- Primary Light: #E6676B
- Primary Dark: #8A1C21
- Secondary: #F8F1E5 (Light beige)
- Dark: #2A2A2A
- Light: #FFFFFF

### Fonts
The project uses Tajawal font for Arabic text, imported in `app/globals.css`.

### Components
Each section is a separate component in the `components/` directory, making it easy to:
- Modify individual sections
- Add new sections
- Reuse components
- Maintain clean, organized code

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The project can be deployed to Vercel, Netlify, or any other platform that supports Next.js:

1. Build the project: `npm run build`
2. Deploy the `.next` folder and other necessary files
3. Set up environment variables if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE). 