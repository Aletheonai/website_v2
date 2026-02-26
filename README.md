# Aletheon - AI Consultancy Website

A modern, responsive website for Aletheon, an AI consultancy firm specializing in strategic AI consulting, leadership training, and AI agent platforms.

## Quick Start

### 1) Prerequisites

- Node.js 18+ (Node 20 recommended)
- npm

### 2) Install dependencies

```bash
npm install
```

### 3) Run locally

```bash
npm run dev
```

Open `http://localhost:5173`.

### 4) Optional: enable contact form (EmailJS)

Create a `.env.local` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these variables are not set, the contact form will show a configuration warning and will not send messages.

### 5) Build and preview production

```bash
npm run build
npm run preview
```

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents
- **Responsive Layout**: Fully responsive across all device sizes
- **Smooth Animations**: Interactive elements with smooth transitions
- **Sections**:
  - Hero section with call-to-action
  - Services showcase
  - Impact metrics and statistics
  - Client testimonials
  - Contact form
  - Footer with links

## 🎨 Design

- **Color Scheme**:
  - Primary Purple: `#5B2192`
  - Accent Blue: `#2B63C9`
  - Subtle gradient transitions throughout the site

## 🛠️ Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite 6.x** - Build tool and dev server
- **Tailwind CSS 4.x** - Styling
- **Lucide React** - Icon library
- **Motion** - Scroll-triggered animations
- **Sonner** - Toast notifications
- **EmailJS** - Contact form delivery (no backend required)

## 📋 Prerequisites

- **Node.js 18+** (v20.19.6 recommended)
- **npm** or **pnpm**

> ⚠️ **Important**: Vite 6.x requires Node.js 18 or higher. If you're using nvm, make sure to use Node.js 20:
> ```bash
> nvm use 20
> nvm alias default 20  # Set as default
> ```

## 🚦 Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Environment Variables

Create a `.env.local` file:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Build

Create a production build:

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx              # Main app component
│   ├── components/
│   │   ├── Navigation.tsx   # Navigation bar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── Impact.tsx       # Impact metrics
│   │   ├── Clients.tsx      # Client testimonials
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   └── components/          # Page components
├── styles/                  # Global styles
└── utils/                   # Shared utilities
└── main.tsx                 # Entry point
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🔧 Troubleshooting

### Crypto Error

If you encounter `TypeError: crypto$2.getRandomValues is not a function`:

1. Make sure you're using Node.js 18+:
   ```bash
   node --version
   ```

2. If using nvm, switch to Node.js 20:
   ```bash
   nvm use 20
   nvm alias default 20
   ```

3. Clear Vite cache:
   ```bash
   rm -rf node_modules/.vite
   ```

## 📝 License

Private project - All rights reserved

## 🔗 Original Design

Based on the Figma design: [AI Consultancy Website Redesign](https://www.figma.com/design/spd8wao7h65jljtfutt1oh/AI-Consultancy-Website-Redesign)
