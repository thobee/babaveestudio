# BabaVee Studio Agency Website

A complete, production-ready single-page agency website designed and built for BabaVee Studio. Built with modern web technologies emphasizing performance, clean code, and premium aesthetic design.

## Features
- **Responsive Layout**: Mobile-first design that scales perfectly across devices.
- **Dynamic Animations**: Smooth, high-performance scroll and layout animations using Framer Motion.
- **Premium UI**: Glassmorphism, tailored typography (Syne, DM Sans, JetBrains Mono), and a distinctive dark/orange brand theme.
- **Working Contact Form**: Integrated with EmailJS for serverless contact requests.

## Tech Stack
- **Framework**: React 18 / Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS

## Setup Instructions

### 1. Prerequisite
Ensure you have Node.js installed (v18 or higher recommended).

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173/` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized bundle will be generated in the `dist` folder.

## EmailJS Configuration
To enable the contact form to actually funnel emails to your inbox, you must set up EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. In the EmailJS dashboard, add a new **Email Service** (e.g., Gmail) and note your **Service ID**.
3. Create an **Email Template** and define the layout. Your contact form sends the following variables:
   - `{{name}}`
   - `{{email}}`
   - `{{projectType}}`
   - `{{budget}}`
   - `{{message}}`
4. Note your **Template ID**.
5. Get your **Public Key** from the Account section in EmailJS.
6. Open `src/components/sections/Contact.jsx`.
7. Uncomment the `emailjs.sendForm` snippet inside the `handleSubmit` function.
8. Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with the values you noted above.

*Built by Antigravity*
