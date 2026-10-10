# BabaVee Studio

BabaVee Studio is a modern agency website for a creative technology studio offering web development, mobile app development, tech content, and digital products.

The site is designed as a premium digital presence for showcasing services, selected work, and a clear path for prospective clients to start a project.

## Live demo

[Visit the live website](https://babaveestudio.vercel.app/)

## Highlights

- Responsive, mobile-first layout
- Dark and orange visual identity with glassmorphism-inspired UI
- Animated sections and interactions powered by Framer Motion
- Services, portfolio, testimonials, pricing, FAQ, and contact sections
- Contact form integration through EmailJS
- Production build configuration with Vite

## Tech stack

- React 19
- Vite
- Tailwind CSS 3
- Framer Motion
- Lucide React
- EmailJS

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/thobee/babaveestudio.git
cd babaveestudio
npm install
```

### Configure environment variables

Copy the example environment file:

```bash
cp .env.example .env
```

Then add your EmailJS values to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These values are available from your [EmailJS dashboard](https://dashboard.emailjs.com/). Do not commit your personal `.env` file.

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the site for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## EmailJS contact form

The contact form uses EmailJS so messages can be sent without a custom backend. To enable it:

1. Create an EmailJS account.
2. Add an email service and create an email template.
3. Add the service ID, template ID, and public key to `.env`.
4. Ensure the template supports these form fields:
   - `name`
   - `email`
   - `projectType`
   - `budget`
   - `message`

The form implementation is located in `src/components/sections/Contact.jsx`.

## Project structure

```text
src/
├── components/       # Layout, sections, and reusable UI components
├── data/              # Services, projects, FAQs, and testimonials
├── hooks/             # Reusable React hooks
├── assets/            # Local image and icon assets
├── App.jsx            # Main application component
└── main.jsx          # Application entry point
```

## Project status

The core agency website is implemented and deployed. Future improvements may include:

- Connecting the contact form to a production email workflow
- Adding a dedicated case-study page for each project
- Improving accessibility and automated test coverage
- Adding a content management workflow for services and portfolio items

## License

No open-source license has been added yet. All rights reserved unless otherwise stated.
