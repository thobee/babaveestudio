import { Check, Zap, ShieldCheck, TrendingUp, MessagesSquare, ArrowUpRight, Quote } from "lucide-react";
import { Reveal, Eyebrow } from "./ui";
import { LOCATION } from "../data/site";

const POINTS = [
  "Fast delivery without compromising quality",
  "Transparent communication, start to finish",
  "Custom solutions built around your business goals",
  "Ongoing support and maintenance after launch",
  "SEO-optimised, mobile-first by default",
  "Fixed pricing — no hidden fees, ever",
];

const VALUES = [
  {
    icon: Zap,
    title: "Speed & Performance",
    text: "We ship blazing-fast websites engineered for Core Web Vitals and real-world load times — because speed converts.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability You Can Trust",
    text: "From secure code practices to uptime monitoring, we build systems that run flawlessly — day and night.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Driven Design",
    text: "Every pixel serves a purpose. Our design decisions are rooted in data, strategy, and conversion psychology.",
  },
  {
    icon: MessagesSquare,
    title: "Seamless Collaboration",
    text: "You're never in the dark. Real-time updates, clear timelines, and a dedicated point of contact every step of the way.",
  },
];

export const About = () => (
  <section id="about" className="section" aria-labelledby="about-title">
    <div className="container-page">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Why BabaVee Studio</Eyebrow>
          <h2 id="about-title" className="h2 mt-5">
            We don&apos;t just build websites. <span className="text-orange">We build businesses.</span>
          </h2>
          <div className="lead mt-6 space-y-4">
            <p>
              BabaVee Studio is a web agency based in {LOCATION}. We work with ambitious founders, growing businesses, and
              forward-thinking brands to build digital products that actually convert.
            </p>
            <p>
              Our edge is the combination of pixel-perfect design, clean scalable code, and genuine commercial thinking — all
              under one roof.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-stone-200">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-orange/15 text-orange">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary mt-10">
            Let&apos;s start a project
            <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="lg:pt-16">
          <figure className="card relative overflow-hidden p-8 sm:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[radial-gradient(closest-side,rgb(255_107_43/0.18),transparent)]" />
            <Quote size={32} strokeWidth={1.5} className="text-orange" aria-hidden="true" />
            <blockquote className="relative mt-6 text-2xl font-semibold leading-snug text-white sm:text-[1.75rem]" style={{ letterSpacing: "-0.02em" }}>
              We treat your business like our own — with the same urgency, care, and standards we&apos;d hold ourselves to.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-ink-600">
                <img src="/images/logo-mark-64.webp" alt="" width="17" height="22" className="no-outline h-[22px] w-auto" />
              </span>
              <span>
                <span className="block font-semibold text-white">BabaVee Studio</span>
                <span className="block text-sm text-mute">{LOCATION}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="mt-20 lg:mt-24">
        <Reveal>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mute">Our core values</h3>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="card h-full p-6">
                <Icon size={22} strokeWidth={1.75} className="text-orange" aria-hidden="true" />
                <h4 className="mt-5 text-lg font-bold">{title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-mute">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
