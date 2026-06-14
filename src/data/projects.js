import TrackImg from "../assets/Track.jpg";
import JustHomeImg from "../assets/justhome.png";
import BabaVee from "../assets/babavee.png";

export const projects = [
  {
    id: 1,
    title: "Track Progress Landing Page",
    description:
      "A modern landing page for tracking project progress with real-time updates and analytics.",
    image: TrackImg,
    tags: ["React", "Tailwind CSS", "Chart.js", "Node.js"],
    link: "https://trackprogress-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Real Estate Website",
    description:
      "High-conversion online store with advanced filtering, cart management, and payment integration.",
    image: JustHomeImg,
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    link: "https://justhome-estate.vercel.app/",
  },
  {
    id: 3,
    title: "BabaVee Studio agency website",
    description:
      "A sleek and modern website for BabaVee Studio, showcasing portfolio, services, and team.",
    image: BabaVee,
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    link: "https://babaveestudio.vercel.app/",
  },
];
