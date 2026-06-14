import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 },
  },
};

const ticker = [
  "Web Development",
  "UI/UX Design",
  "App Development",
  "Innovative Ideas",
  "E-Commerce",
  "Development Agency",
  "Brand Strategy",
  "Digital Marketing",
];

// Exact logic from the GradientBars component
const NUM_BARS = 13;
const calculateHeight = (index, total) => {
  const position = index / (total - 1);
  const distanceFromCenter = Math.abs(position - 0.5);
  const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
  return 30 + 70 * heightPercentage; // minHeight=30, maxHeight=100
};

// ─── FLOATING PILL COMPONENT ───
const FloatingPill = ({ text, bgColor, textColor, position, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${position} pointer-events-none`}
  >
    <div
      className={`${bgColor} ${textColor} px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-md border border-white/10`}
      style={{
        animation: `float-pill 4s ease-in-out infinite`,
        animationDelay: `${delay * 0.2}s`,
        boxShadow: bgColor.includes("ff6b35")
          ? "0 0 25px rgba(255,107,53,0.3)"
          : "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <span>{text}</span>
      <ArrowUpRight size={14} strokeWidth={2.5} />
    </div>
  </motion.div>
);

// ─── HERO FRAME COMPONENT ───
const HeroFrame = ({ children }) => (
  <div className="relative w-full max-w-4xl mx-auto">
    {/* Frame border */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        top: "-8px",
        bottom: "-8px",
        left: "-20px",
        right: "-20px",
      }}
    />

    {/* Corner markers */}
    {[
      { top: "-12px", left: "-24px" },
      { top: "-12px", right: "-24px" },
      { bottom: "-12px", left: "-24px" },
      { bottom: "-12px", right: "-24px" },
    ].map((pos, idx) => (
      <div
        key={idx}
        className="absolute pointer-events-none hidden sm:block"
        style={{
          ...pos,
          width: "10px",
          height: "10px",
          backgroundColor: "#ff6b35",
          boxShadow: "0 0 15px rgba(255,107,53,0.4)",
        }}
      />
    ))}

    {/* Content */}
    <div className="relative">{children}</div>
  </div>
);

const GradientBars = () => (
  <>
    <style>{`
      @keyframes pulseBar {
        0%   { transform: scaleY(var(--initial-scale)); }
        100% { transform: scaleY(calc(var(--initial-scale) * 0.7)); }
      }
      @keyframes ticker { to { transform: translateX(-50%); } }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(255,107,53,0.3); }
        50%       { box-shadow: 0 0 45px rgba(255,107,53,0.65); }
      }
      @keyframes float-pill {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }
    `}</style>

    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          width: "100%",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        {Array.from({ length: NUM_BARS }).map((_, index) => {
          const height = calculateHeight(index, NUM_BARS);
          const scale = height / 100;
          return (
            <div
              key={index}
              style={{
                flex: `1 0 calc(100% / ${NUM_BARS})`,
                maxWidth: `calc(100% / ${NUM_BARS})`,
                height: "100%",
                background:
                  "linear-gradient(to top, rgb(255, 80, 0), transparent)",
                transformOrigin: "bottom",
                animationName: "pulseBar",
                animationDuration: "2s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationDelay: `${index * 0.1}s`,
                outline: "1px solid rgba(0,0,0,0)",
                boxSizing: "border-box",
                // The CSS variable trick — key to making it work
                "--initial-scale": scale,
                transform: `scaleY(${scale})`,
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
    {/* ── GRADIENT BARS — exact implementation ── */}
    <GradientBars />

    {/* Dark center overlay so text is legible */}
    <div
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 70% 80% at 50% 40%, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 55%, transparent 100%)",
      }}
    />

    {/* Top vignette */}
    <div
      className="absolute top-0 inset-x-0 h-40 z-[1] pointer-events-none"
      style={{
        background:
          "linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)",
      }}
    />

    {/* Bottom fade */}
    <div
      className="absolute bottom-0 inset-x-0 h-20 z-[1] pointer-events-none"
      style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }}
    />

    {/* Glass blur effect */}
    <div
      className="absolute inset-0 z-[0.5] pointer-events-none"
      style={{
        backdropFilter: "blur(8px)",
        background: "rgba(255, 255, 255, 0.02)",
      }}
    />

    {/* ── CONTENT ── */}
    <div className="relative z-10 flex flex-col justify-center flex-grow pt-10 sm:pt-14 md:pt-20 pb-32 sm:pb-40 md:pb-48">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[8vw]">
        <div className="relative flex justify-center">
          <HeroFrame>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8 px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 lg:px-20"
            >
              {/* Headline */}
              <div className="flex flex-col items-center gap-1">
                {/* Line 1 */}
                <motion.div
                  variants={item}
                  className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
                >
                  <h1
                    className="font-syne font-extralight text-white leading-[1.02] tracking-[-0.03em]"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                  >
                    We Build
                  </h1>
                  <span
                    className="inline-block font-syne font-semibold text-[#0a0a0a] leading-[1.02] tracking-[-0.02em] bg-[#ff6b35] rounded-full px-6 py-[0.14em]"
                    style={{ fontSize: "clamp(2.3rem, 5.5vw, 5.1rem)" }}
                  >
                    Brands
                  </span>
                </motion.div>

                {/* Line 2 */}
                <motion.div variants={item}>
                  <h1
                    className="font-syne font-extralight text-white leading-[1.02] tracking-[-0.03em]"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                  >
                    and Digital
                  </h1>
                </motion.div>

                {/* Line 3 — Solutions pill + spinning CTA */}
                <motion.div
                  variants={item}
                  className="mt-2 sm:mt-2 md:mt-3 flex items-center justify-center flex-wrap gap-2 sm:gap-2 md:gap-3"
                >
                  <span
                    className="inline-block font-syne font-semibold text-[#0a0a0a] leading-[1.02] tracking-[-0.02em] bg-[#ff6b35] rounded-full px-6 py-[0.14em]"
                    style={{
                      fontSize: "clamp(2.3rem, 5.5vw, 5.1rem)",
                    }}
                  >
                    Solutions
                  </span>

                  {/* Spinning ring CTA */}
                  <a
                    href="#contact"
                    className="group relative shrink-0 self-center"
                  >
                    <div className="relative w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] md:w-[88px] md:h-[88px]">
                      <svg
                        className="w-full h-full animate-spin"
                        style={{ animationDuration: "12s" }}
                        viewBox="0 0 90 90"
                      >
                        <defs>
                          <path
                            id="ring"
                            d="M45,45 m-33,0 a33,33 0 1,1 66,0 a33,33 0 1,1,-66,0"
                          />
                        </defs>
                        <text
                          fontSize="8.5"
                          fill="rgba(255,255,255,0.4)"
                          letterSpacing="4"
                          fontFamily="monospace"
                          fontWeight="700"
                        >
                          <textPath href="#ring">
                            BABAVEE STUDIO · LAGOS NG ·&nbsp;
                          </textPath>
                        </text>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] rounded-full bg-[#ff6b35] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ArrowUpRight
                            size={16}
                            className="sm:size-[18px] md:size-[22px] text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#contact" className="group self-center ml-0 sm:ml-1">
                    <span
                      className="uppercase font-mono leading-[1.6] sm:leading-[1.8] text-left block text-[9px] sm:text-[10px] md:text-[11px]"
                      style={{
                        letterSpacing: "0.22em",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Let's Build
                      <br />
                      <span
                        className="group-hover:text-[#ff6b35] transition-colors duration-300"
                        style={{
                          color: "rgba(255,255,255,0.85)",
                          fontWeight: 500,
                        }}
                      >
                        Together
                      </span>
                    </span>
                  </a>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="flex items-start justify-center gap-2 sm:gap-3 max-w-[520px] px-2"
              >
                <p
                  className="font-syne text-white leading-[1.6] sm:leading-[1.75] text-center text-xs sm:text-sm md:text-base"
                  style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)" }}
                >
                  We design exceptional brands, products, web apps, and mobile
                  apps for startups and enterprises across{" "}
                  <span className="text-white font-semibold">
                    Nigeria and beyond.
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </HeroFrame>
          {/* FLOATING PILLS AROUND FRAME */}
          {/* Left - Strategy */}
          <FloatingPill
            text="Strategy"
            bgColor="bg-[#ff6b35]"
            textColor="text-[#0a0a0a]"
            position="hidden sm:hidden md:block left-0 top-1/3 -translate-x-20 lg:-translate-x-28"
            delay={0}
          />

          {/* Top Right - Creative */}
          <FloatingPill
            text="Expert"
            bgColor="bg-white"
            textColor="text-[#0a0a0a]"
            position="hidden sm:hidden md:block right-0 top-8 translate-x-20 lg:translate-x-28"
            delay={1}
          />

          {/* Bottom Right - Development */}
          <FloatingPill
            text="Innovative"
            bgColor="bg-[#dff078]"
            textColor="text-[#0a0a0a]"
            position="hidden sm:hidden md:block right-0 bottom-24 translate-x-20 lg:translate-x-28"
            delay={2}
          />

          {/* Get Started Button - Below Rectangle */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center w-full absolute -bottom-20 sm:-bottom-24 md:-bottom-28 left-0"
          >
            <style>{`
              @keyframes premium-glow {
                0%, 100% {
                  box-shadow: 0 0 25px rgba(255, 107, 53, 0.35),
                              0 8px 32px rgba(255, 107, 53, 0.15),
                              inset 0 1px 0 rgba(255, 255, 255, 0.2);
                }
                50% {
                  box-shadow: 0 0 45px rgba(255, 107, 53, 0.55),
                              0 12px 48px rgba(255, 107, 53, 0.25),
                              inset 0 1px 0 rgba(255, 255, 255, 0.3);
                }
              }
              @keyframes badge-pulse {
                0%, 100% { transform: translateX(0) scale(1); }
                50% { transform: translateX(4px) scale(1.02); }
              }
              @keyframes shimmer {
                0% { background-position: -1000px 0; }
                100% { background-position: 1000px 0; }
              }
              @keyframes float-up {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-2px); }
              }
            `}</style>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-full text-white font-medium text-xs sm:text-sm md:text-base transition-all duration-600 overflow-hidden border border-white/30 hover:border-white/60"
              style={{

