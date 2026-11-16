// Images live in /public/images/work as WebP in several widths.
// `sizes` lists the widths available for each image (used to build srcset).
export const projects = [
  {
    id: 1,
    title: "Real Estate Website",
    description:
      "Just Home: a property website with a location, type and price search so visitors can find listings quickly.",
    image: "justhome",
    sizes: [640, 1280],
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    link: "https://justhome-estate.vercel.app/",
  },
  {
    id: 2,
    title: "Track Progress Landing Page",
    description:
      "A modern landing page for tracking project progress with real-time updates and analytics.",
    image: "track",
    sizes: [640, 1222],
    tags: ["React", "Tailwind CSS", "Chart.js", "Node.js"],
    link: "https://trackprogress-ten.vercel.app/",
  },
  {
    id: 3,
    title: "BabaVee Studio agency website",
    description:
      "A sleek and modern website for BabaVee Studio, showcasing portfolio, services, and team.",
    image: "babavee",
    sizes: [640, 1280],
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    link: "https://babaveestudio.vercel.app/",
  },
];

export const srcSet = (p) =>
  p.sizes.map((w) => `/images/work/${p.image}-${w}.webp ${w}w`).join(", ");
export const src = (p) => `/images/work/${p.image}-${p.sizes[p.sizes.length - 1]}.webp`;
