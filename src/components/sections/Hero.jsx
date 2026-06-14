import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
};

// ─── FLOATING PILL COMPONENT ───
const FloatingPill = ({ text, bgColor, textColor, position, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${position} pointer-events-none`}
  >
    <div
      className={`${bgColor} ${textColor} px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-md border border-white/10 shadow-xl`}
      style={{
        animation: `float-pill 4.5s ease-in-out infinite`,
        animationDelay: `${delay * 0.25}s`,
        boxShadow: bgColor.includes("ff6b35")
          ? "0 0 30px rgba(255,107,53,0.35)"
          : "0 4px 15px rgba(0,0,0,0.2)",
      }}
    >
      <span>{text}</span>
      <ArrowUpRight size={14} strokeWidth={3} />
    </div>
  </motion.div>
);

// ─── HERO FRAME COMPONENT ───
const HeroFrame = ({ children }) => (
  <div className="relative w-full max-w-4xl mx-auto">
    <div
      className="absolute inset-0 pointer-events-none rounded-3xl"
      style={{
        border: "1px solid rgba(255,255,255,0.09)",
        top: "-10px",
        bottom: "-10px",
        left: "-22px",
        right: "-22px",
      }}
    />

    {/* Corner accents */}
    {[
      { top: "-14px", left: "-26px" },
      { top: "-14px", right: "-26px" },
      { bottom: "-14px", left: "-26px" },
      { bottom: "-14px", right: "-26px" },
    ].map((pos, idx) => (
      <div
        key={idx}
        className="absolute pointer-events-none hidden sm:block w-3 h-3 bg-[#ff6b35] rounded-full"
        style={{
          ...pos,
          boxShadow: "0 0 18px rgba(255,107,53,0.5)",
        }}
      />
    ))}

    <div className="relative">{children}</div>
  </div>
);

const GradientBars = () => (
  <>
    <style>{`
      @keyframes pulseBar {
        0%   { transform: scaleY(var(--initial-scale)); }
        100% { transform: scaleY(calc(var(--initial-scale) * 0.72)); }
      }
      @keyframes float-pill {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-14px); }
      }
    `}</style>

    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="flex h-full">
        {Array.from({ length: 13 }).map((_, index) => {
          const position = index / 12;
          const distance = Math.abs(position - 0.5);
          const height = 32 + 68 * Math.pow(distance * 2, 1.15);
          const scale = height / 100;

          return (
            <div
              key={index}
              style={{
                flex: `1 0 calc(100% / 13)`,
                height: "100%",
                background: "linear-gradient(to top, rgb(255, 80, 0), transparent)",
                transformOrigin: "bottom",
                animation: `pulseBar 3s ease-in-out infinite alternate`,
                animationDelay: `${index * 0.085}s`,
                "--initial-scale": scale,
                transform: `scaleY(${scale})`,
                willChange: "transform",
              }}
            />
          );
        })}
      </div>
    </div>
  </>
);

export const Hero = () => (
  <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white flex flex-col">
    <GradientBars />

    {/* Overlays */}
    <div
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse 75% 85% at 50% 38%, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.55) 58%, transparent 100%)",
      }}
    />

    <div className="absolute top-0 inset-x-0 h-44 z-[1] pointer-events-none bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />

    <div className="absolute bottom-0 inset-x-0 h-28 z-[1] pointer-events-none bg-gradient-to-t from-[#0a0a0a] to-transparent" />

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center flex-grow pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-32 sm:pb-40 md:pb-48">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[8vw]">
        <div className="relative flex justify-center">
          <HeroFrame>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center gap-5 sm:gap-7 md:gap-9 px-6 sm:px-8 md:px-12 py-6 lg:px-20"
            >
              {/* Headline */}
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  variants={item}
                  className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
                >
                  <h1
                    className="font-syne font-extralight text-white leading-[1.02] tracking-[-0.04em]"
                    style={{ fontSize: "clamp(2.6rem, 6.2vw, 5.7rem)" }}
                  >
                    We Build
                  </h1>
                  <span
                    className="inline-block font-syne font-semibold text-[#0a0a0a] leading-[1.02] tracking-[-0.03em] bg-[#ff6b35] rounded-full px-7 py-1"
                    style={{ fontSize: "clamp(2.4rem, 5.7vw, 5.3rem)" }}
                  >
                    Brands
                  </span>
                </motion.div>

                <motion.div variants={item}>
                  <h1
                    className="font-syne font-extralight text-white leading-[1.02] tracking-[-0.04em]"
                    style={{ fontSize: "clamp(2.6rem, 6.2vw, 5.7rem)" }}
                  >
                    and Digital
                  </h1>
                </motion.div>

                <motion.div
                  variants={item}
                  className="mt-3 flex items-center justify-center flex-wrap gap-3"
                >
                  <span
                    className="inline-block font-syne font-semibold text-[#0a0a0a] leading-[1.02] tracking-[-0.03em] bg-[#ff6b35] rounded-full px-7 py-1"
                    style={{ fontSize: "clamp(2.4rem, 5.7vw, 5.3rem)" }}
                  >
                    Solutions
                  </span>

                  {/* Spinning Ring */}
                  <a href="#contact" className="group relative shrink-0 self-center">
                    <div className="relative w-[68px] h-[68px] sm:w-[78px] sm:h-[78px] md:w-[90px] md:h-[90px]">
                      <svg className="w-full h-full animate-spin" style={{ animationDuration: "13s" }} viewBox="0 0 90 90">
                        <defs>
                          <path id="ring" d="M45,45 m-33,0 a33,33 0 1,1 66,0 a33,33 0 1,1,-66,0" />
                        </defs>
                        <text fontSize="8.2" fill="rgba(255,255,255,0.45)" letterSpacing="3.5" fontFamily="monospace" fontWeight="700">
                          <textPath href="#ring">BABAVEE STUDIO · LAGOS · </textPath>
                        </text>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#ff6b35] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <ArrowUpRight size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div variants={fadeIn} className="max-w-[540px] px-2">
                <p className="font-syne text-white/90 leading-relaxed text-center text-[0.95rem] sm:text-base md:text-[1.05rem]">
                  We design exceptional brands, products, web apps, and mobile apps for startups and enterprises across{" "}
                  <span className="text-white font-semibold">Nigeria and beyond.</span>
                </p>
              </motion.div>
            </motion.div>
          </HeroFrame>

          {/* Floating Pills - Slightly refined positions */}
          <FloatingPill
            text="Strategy"
            bgColor="bg-[#ff6b35]"
            textColor="text-[#0a0a0a]"
            position="hidden md:block -left-6 lg:-left-12 top-[28%]"
            delay={0.2}
          />

          <FloatingPill
            text="Expert"
            bgColor="bg-white"
            textColor="text-[#0a0a0a]"
            position="hidden md:block -right-6 lg:-right-12 top-[18%]"
            delay={0.6}
          />

          <FloatingPill
            text="Innovative"
            bgColor="bg-[#dff078]"
            textColor="text-[#0a0a0a]"
            position="hidden md:block -right-8 lg:-right-14 bottom-[26%]"
            delay={1}
          />

          {/* CTA Button */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center w-full absolute -bottom-16 sm:-bottom-20 md:-bottom-24 left-0"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white font-medium text-sm md:text-base transition-all duration-500 overflow-hidden border border-white/30 hover:border-white/50"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -skew-x-12 -translate-x-full group-hover:translate-x-full" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ff6b35] flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
                <span className="font-syne tracking-wide">START A PROJECT</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);