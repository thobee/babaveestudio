import { motion } from "framer-motion";

const tech = [
  { name: "React",       icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js",     icon: "https://cdn.simpleicons.org/nextdotjs/111111" },
  { name: "TypeScript",  icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript",  icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Tailwind",    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "HTML5",       icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Bootstrap",   icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "Node.js",     icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "PHP",         icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Python",      icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Firebase",    icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Supabase",    icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "MongoDB",     icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "MySQL",       icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Docker",      icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Figma",       icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "WordPress",   icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Shopify",     icon: "https://cdn.simpleicons.org/shopify/96BF48" },
  { name: "Flutter",     icon: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "Git",         icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Framer",      icon: "https://cdn.simpleicons.org/framer/0055FF" },
];

// Duplicate for seamless infinite loop
const loopedTech = [...tech, ...tech];

export const TechStack = () => {
  return (
    <section className="py-24 bg-white relative z-10 border-t border-gray-100 overflow-hidden">
      {/* Keyframe animation */}
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-ltr 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full mb-14"
        >
          <h2
            className="font-sans font-bold text-[#0A1628] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: "1.1" }}
          >
            Powered by modern tech.
          </h2>
          <p className="font-sans text-gray-500 text-[16px] md:text-[18px] max-w-2xl leading-relaxed">
            We leverage industry-leading frameworks and platforms to build fast,
            scalable, and beautiful digital experiences.
          </p>
        </motion.div>
      </div>

      {/* ── MARQUEE STRIP ── full-bleed, no max-w constraint */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-28 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-28 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track gap-5 px-5">
          {loopedTech.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 shrink-0 mx-3 cursor-default"
            >
              {/* Icon card */}
              <div
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center
                  group-hover:bg-white group-hover:border-gray-300 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:-translate-y-2
                  transition-all duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                />
              </div>
              {/* Label */}
              <span className="font-sans font-semibold text-[13px] text-gray-500 group-hover:text-gray-800 transition-colors duration-300 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}

          {/* & more card — appears at the end of each loop */}
          <div className="flex flex-col items-center gap-3 shrink-0 mx-3 cursor-default">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl border-2 border-dashed border-brand-orange/40 bg-brand-orange/[0.04] flex flex-col items-center justify-center gap-1">
              <span className="font-sans text-[22px] leading-none text-brand-orange/50 tracking-tight select-none">···</span>
            </div>
            <span className="font-syne font-bold text-[13px] text-brand-orange whitespace-nowrap">
              &amp; more
            </span>
          </div>

          {/* Duplicate & more for the second loop */}
          <div className="flex flex-col items-center gap-3 shrink-0 mx-3 cursor-default">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl border-2 border-dashed border-brand-orange/40 bg-brand-orange/[0.04] flex flex-col items-center justify-center gap-1">
              <span className="font-sans text-[22px] leading-none text-brand-orange/50 tracking-tight select-none">···</span>
            </div>
            <span className="font-syne font-bold text-[13px] text-brand-orange whitespace-nowrap">
              &amp; more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
