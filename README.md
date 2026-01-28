# Sri Lanka Travel Website

A modern, responsive travel website built with React, Vite, and shadcn/ui components. Showcase Sri Lanka's destinations, tour packages, experiences, and allow customers to get in touch.

## Features

- **Landing Page** - Hero section with stunning visuals and call-to-action
- **Destinations** - Showcase popular tourist destinations in Sri Lanka
- **Tour Packages** - Browse and explore various tour packages
- **Experiences** - Discover unique travel experiences
- **Blog Section** - Travel tips and stories
- **Contact Form** - Get in touch with customers
- **Responsive Design** - Mobile-friendly UI that works on all devices
- **Modern UI Components** - Built with shadcn/ui and Tailwind CSS
- **Smooth Navigation** - Sticky header with smooth scrolling

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: JavaScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Badge, Button, Input, Card, Tabs, etc.)
- **Icons**: Lucide React
- **Package Manager**: npm

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui components (button, card, input, etc.)
├── pages/
│   └── landingPage/    # Main landing page
│       ├── landing.jsx
│       └── component/  # Landing page sub-components
│           ├── Header.jsx
│           ├── Hero.jsx
│           ├── WhySriLanka.jsx
│           ├── TourPackages.jsx
│           ├── Destinations.jsx
│           ├── Experiences.jsx
│           ├── Blog.jsx
│           ├── Contact.jsx
│           ├── Footer.jsx
│           ├── UiTabs.jsx
│           ├── Welcome.jsx
│           └── mockData.js
├── lib/                 # Utility functions
├── assets/             # Images and static files
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites
- **Node.js** 16 or higher ([Download](https://nodejs.org/))
- **npm** 7+ (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd my-app
```

#### 2. Install Dependencies
```bash
npm install
```
This will install all required packages from `package.json`:
- React 18
- Vite build tool
- Tailwind CSS
- shadcn/ui components
- Lucide React icons
- ESLint for code quality

#### 3. Start Development Server
```bash
npm run dev
```

The application will start on `http://localhost:5173`

**What to expect:**
- Hot Module Replacement (HMR) enabled - changes auto-refresh
- Terminal will show the local URL
- Press `q` to stop the server

#### 4. View in Browser
Open your browser and navigate to:
```
http://localhost:5173
```

You should see the Sri Lanka Travel Website with:
- Responsive header navigation
- Hero section with background image
- Destinations cards
- Tour packages
- Blog section
- Contact form
- Footer

### Environment Setup (Optional)

If you want to customize the app:

1. **Modify Port** - Edit `vite.config.js` to change the default port
2. **Add Environment Variables** - Create a `.env` file:
```bash
VITE_API_URL=http://localhost:3000
```

### Troubleshooting

**Images not showing?**
- Check browser network tab (F12) for failed image requests
- Ensure internet connection is active (images load from Unsplash)
- Clear browser cache (Ctrl+Shift+Delete)

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies installation failed?**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**Lint errors?**
```bash
npm run lint
```

To auto-fix some issues:
```bash
npx eslint . --fix
```

##  Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

##  Component Overview

### Landing Page Components
- **Header** - Navigation bar with links to all sections
- **Hero** - Welcome banner with CTA button
- **WhySriLanka** - Benefits and reasons to visit
- **TourPackages** - Available tour package cards
- **Destinations** - Popular destinations showcase
- **Experiences** - Unique experiences listings
- **Blog** - Travel blog and tips
- **Contact** - Contact form (currently stores data in local state)
- **Footer** - Footer with links and contact info

##  Current Status

### Contact Form
**Note**: The contact form currently displays an alert and stores data in React local state only. Data is lost when the page refreshes.

**To implement persistent storage, you need to:**
- Set up a backend API
- Connect to a database
- Update the `handleSubmit` function in `Contact.jsx` to send data to your backend

##  Styling

The project uses Tailwind CSS with a color scheme featuring:
- Emerald green (`emerald-600`, `emerald-700`) for primary actions
- Gray tones for text and backgrounds
- Custom utilities in `index.css`

##  Responsive Design

All pages are fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

##  Navigation

Main navigation links:
- Home
- Destinations
- Packages
- Experiences
- Blog
- Contact

## Future Enhancements

- [ ] Backend API for contact form submission
- [ ] Database integration for storing customer details
- [ ] Email notifications on contact form submission
- [ ] User authentication
- [ ] Booking system
- [ ] Payment gateway integration
- [ ] Admin dashboard


