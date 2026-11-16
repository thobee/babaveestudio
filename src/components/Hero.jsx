import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BrowserFrame, WhatsAppIcon } from "./ui";
import { projects, srcSet, src } from "../data/projects";
import { WHATSAPP, LOCATION } from "../data/site";

const EASE = [0.22, 1, 0.36, 1];
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const SERVICES_LINE = ["Websites", "Web apps", "Mobile apps", "Brand identity"];

export const Hero = () => {
  const [front, back] = projects;
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40" aria-labelledby="hero-title">
      {/* static warm glow + faint grid, no looping animation */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_107_43/0.18),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      </div>

      <div className="container-page relative grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-32">
        <motion.div variants={stagger} initial={reduce ? false : "hidden"} animate="show">
          <motion.p variants={rise} className="chip gap-2 !text-[13px]">
            <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
            Design &amp; development studio · {LOCATION.split(",")[0]}
          </motion.p>

          <motion.h1
            variants={rise}
            id="hero-title"
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.5rem]"
            style={{ letterSpacing: "-0.04em" }}
          >
            We build brands and <span className="text-orange">digital solutions.</span>
          </motion.h1>

          <motion.p variants={rise} className="lead mt-6 max-w-[34rem]">
            We design exceptional brands, products, web apps, and mobile apps for startups and enterprises across{" "}
            <span className="font-semibold text-white">Nigeria and beyond.</span>
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Start a project
              <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden="true" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <WhatsAppIcon size={18} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.ul variants={rise} className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-mute" aria-label="What we do">
            {SERVICES_LINE.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-orange/70" aria-hidden="true" />
                {s}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* real project screenshots */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
          className="relative hidden w-full lg:block"
        >
          <BrowserFrame label="trackprogress-ten.vercel.app" className="absolute -top-6 right-0 hidden w-[78%] rotate-[2deg] opacity-70 sm:block lg:-top-10">
            <img
              src={src(back)}
              srcSet={srcSet(back)}
              sizes="(min-width: 1024px) 440px, 70vw"
              width="1222"
              height="764"
              alt=""
              className="no-outline aspect-[16/10] w-full object-cover object-top"
            />
          </BrowserFrame>
          <BrowserFrame label="justhome-estate.vercel.app" className="relative w-full sm:mt-16 sm:w-[88%]">
            <div className="overflow-hidden">
              <img
                src={src(front)}
                srcSet={srcSet(front)}
                sizes="(min-width: 1024px) 500px, 92vw"
                width="1280"
                height="800"
                alt="Just Home real estate website designed and built by BabaVee Studio"
                fetchPriority="high"
                className="slow-zoom no-outline aspect-[16/10] w-full object-cover object-top"
              />
            </div>
          </BrowserFrame>
        </motion.div>
      </div>
    </section>
  );
};
