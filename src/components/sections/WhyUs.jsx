import { motion } from "framer-motion";
import {
  Users,
  Award,
  Clock,
  Code2,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  MessageCircle,
  Trophy,
  Rocket,
  ThumbsUp,
} from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// ── ANIMATED STAT CARD ────────────────────────────────────────────
const StatCard = ({ icon: Icon, value, label, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    className="group relative flex flex-col items-start gap-4 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-400 overflow-hidden cursor-default"
  >
    {/* glow blob */}
    <div
      className="absolute -top-6 -right-6 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
      style={{ background: color }}
    />

    {/* icon */}
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0"
      style={{
        background: `${color}18`,
        borderColor: `${color}35`,
      }}
    >
      <Icon size={22} style={{ color }} strokeWidth={1.8} />
    </div>

    {/* number */}
    <div>
      <span
        className="font-syne font-black leading-none block"
        style={{
          fontSize: "clamp(2.1rem, 3vw, 2.8rem)",
          background: `linear-gradient(135deg, #fff 40%, ${color})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
      </span>
      <span className="font-sans text-white/50 text-[13px] mt-1.5 block font-medium tracking-wide">
        {label}
      </span>
    </div>
  </motion.div>
);

// ── FEATURE ROW ───────────────────────────────────────────────────
const Feature = ({ text, delay }) => (
  <motion.li
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    className="flex items-start gap-3 group"
  >
    <CheckCircle2
      size={18}
      className="text-brand-orange mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-200"
    />
    <span className="font-sans text-white/70 text-[14.5px] leading-relaxed group-hover:text-white/90 transition-colors duration-200">
      {text}
    </span>
  </motion.li>
);

// ── VALUE CARD ────────────────────────────────────────────────────
const ValueCard = ({ icon: Icon, title, description, accentColor, delay, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    className="group relative flex flex-col gap-4 p-7 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all duration-400 overflow-hidden"
  >
    {/* corner glow */}
    <div
      className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -translate-y-1/2 translate-x-1/2"
      style={{ background: accentColor }}
    />

    {/* top accent bar */}
    <div
      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
      style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
    />

    {/* number label */}
    <span
      className="absolute top-5 right-6 font-syne font-black text-[2.4rem] leading-none select-none pointer-events-none transition-opacity duration-300 opacity-[0.06] group-hover:opacity-[0.12]"
      style={{ color: accentColor }}
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center border shrink-0"
      style={{ background: `${accentColor}18`, borderColor: `${accentColor}35` }}
    >
      <Icon size={20} style={{ color: accentColor }} strokeWidth={1.8} />
    </div>

    <div>
      <h3 className="font-syne font-bold text-white text-[17px] mb-2 group-hover:text-brand-orange transition-colors duration-300">
        {title}
      </h3>
      <p className="font-sans text-white/55 text-[13.5px] leading-[1.75]">
        {description}
      </p>
    </div>
  </motion.div>
);

// ── MAIN COMPONENT ────────────────────────────────────────────────
export const WhyUs = () => {
  const [ref] = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { icon: Users,  value: "150+", label: "Happy Clients",        color: "#ff6b35" },
    { icon: Award,  value: "300+", label: "Projects Completed",   color: "#a855f7" },
    { icon: Clock,  value: "8+",   label: "Years Experience",     color: "#0ea5e9" },
    { icon: Code2,  value: "25+",  label: "Technologies",         color: "#10b981" },
  ];

  const features = [
    "Fast delivery without compromising quality",
    "Transparent communication, start to finish",
    "Custom solutions built around your business goals",
    "Ongoing support and maintenance after launch",
    "SEO-optimised, mobile-first by default",
    "Fixed pricing — no hidden fees, ever",
  ];

  const values = [
    {
      icon: Zap,
      title: "Speed & Performance",
      description:
        "We ship blazing-fast websites engineered for Core Web Vitals and real-world load times — because speed converts.",
      accentColor: "#f59e0b",
    },
    {
      icon: Shield,
      title: "Reliability You Can Trust",
      description:
        "From secure code practices to uptime monitoring, we build systems that run flawlessly — day and night.",
      accentColor: "#0ea5e9",
    },
    {
      icon: TrendingUp,
      title: "Growth-Driven Design",
      description:
        "Every pixel serves a purpose. Our design decisions are rooted in data, strategy, and conversion psychology.",
      accentColor: "#10b981",
    },
    {
      icon: MessageCircle,
      title: "Seamless Collaboration",
      description:
        "You're never in the dark. Real-time updates, clear timelines, and a dedicated point of contact every step of the way.",
      accentColor: "#a855f7",
    },
  ];

  return (
    <section
      id="whyus"
      className="relative py-28 md:py-36 z-10 bg-[#080c14] overflow-hidden border-t border-white/[0.06]"
    >
      {/* ── Background ambient lights ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse, #ff6b3520 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20 translate-x-1/3"
        style={{ background: "radial-gradient(ellipse, #a855f720 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-10">

        {/* ══════════════════════════════════
            HEADER
        ══════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20"
        >
          <div className="max-w-2xl">
            {/* pill label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="font-syne text-[11px] uppercase tracking-[0.22em] text-brand-orange font-bold">
                Why BabaVee Studio
              </span>
            </div>

            <h2
              className="font-syne font-extralight text-white leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              We Don't Just Build{" "}
              <span
                className="font-semibold text-[#0a0a0a] rounded-full px-5 py-1 inline-block"
                style={{ background: "#ff6b35" }}
              >
                Websites
              </span>
              <br />
              We Build{" "}
              <span className="font-semibold bg-gradient-to-r from-brand-orange to-orange-300 bg-clip-text text-transparent">
                Businesses.
              </span>
            </h2>
          </div>

          <p className="font-sans text-white/50 text-[15px] leading-[1.8] max-w-sm lg:text-right">
            A team of specialists who care deeply about design, code quality, and
            your business outcome — not just deliverables.
          </p>
        </motion.div>

        {/* ══════════════════════════════════
            STATS ROW
        ══════════════════════════════════ */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 md:mb-20">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 0.08} />
          ))}
        </div>

        {/* ══════════════════════════════════
            TWO-COLUMN SECTION
        ══════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16 md:mb-20">

          {/* LEFT — about text + features */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-[46%] shrink-0"
          >
            {/* section label */}
            <span className="font-syne text-[11px] uppercase tracking-[0.22em] text-brand-orange font-bold mb-5 block">
              About Us
            </span>

            <h3
              className="font-syne font-bold text-white leading-[1.18] mb-6"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Passionate builders. Strategic thinkers. Your unfair advantage.
            </h3>

            <p className="font-sans text-white/60 text-[15px] leading-[1.85] mb-4">
              BabaVee Studio is a premium web agency based in Lagos, Nigeria.
              We work with ambitious founders, growing businesses, and forward-thinking
              brands to build digital products that actually convert.
            </p>
            <p className="font-sans text-white/60 text-[15px] leading-[1.85] mb-10">
              Our edge is the rare combination of pixel-perfect design, clean
              scalable code, and genuine commercial thinking — all under one roof.
            </p>

            {/* feature checklist */}
            <ul className="flex flex-col gap-4 mb-10">
              {features.map((f, i) => (
                <Feature key={i} text={f} delay={0.06 * i} />
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://wa.me/2348102877413?text=Hi%20BabaVee%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-brand-orange text-white font-syne font-semibold text-[13px] hover:shadow-[0_8px_32px_rgba(255,107,43,0.45)] hover:bg-orange-500 transition-all duration-300 self-start"
            >
              <MessageCircle size={16} />
              Start a Project on WhatsApp
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>

          {/* RIGHT — decorative highlight block */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col justify-center"
          >
            {/* big quote / highlight card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-8 md:p-10">
              {/* accent glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,107,43,0.12) 0%, transparent 70%)" }} />

              <span className="font-syne font-black text-[7rem] md:text-[9rem] leading-none text-brand-orange/10 select-none block -mt-4 -ml-2">
                "
              </span>

              <blockquote className="font-syne font-light text-white/90 leading-[1.6] -mt-10 mb-8 relative z-10"
                style={{ fontSize: "clamp(1.15rem, 2vw, 1.4rem)" }}>
                We treat your business like our own — with the same urgency, care, and standards we'd hold ourselves to.
              </blockquote>

              <div className="flex items-center gap-4 relative z-10">
                {/* gradient ring avatar */}
                <div className="shrink-0 p-[2px] rounded-full" style={{ background: "linear-gradient(135deg, #ff6b35, #a855f7)" }}>
                  <div className="w-10 h-10 rounded-full bg-[#0d1117] flex items-center justify-center font-syne font-black text-white text-[13px] tracking-wide">
                    BV
                  </div>
                </div>
                <div>
                  <p className="font-syne font-semibold text-white text-[14px]">BabaVee Studio</p>
                  <p className="font-sans text-white/40 text-[12px]">Lagos, Nigeria · Since 2023</p>
                </div>
              </div>

              {/* deco horizontal line */}
              <div className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-4 relative z-10">
                {[
                  { icon: Trophy,   color: "#f59e0b", label: "Award-winning quality" },
                  { icon: Rocket,   color: "#0ea5e9", label: "Fast turnaround" },
                  { icon: ThumbsUp, color: "#10b981", label: "100% satisfaction" },
                ].map(({ icon: Ico, color, label }, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center border"
                      style={{ background: `${color}15`, borderColor: `${color}30` }}
                    >
                      <Ico size={16} style={{ color }} strokeWidth={1.8} />
                    </div>
                    <span className="font-sans text-white/50 text-[11px] leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════
            VALUE CARDS GRID
        ══════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-2"
        >
          <span className="font-syne text-[11px] uppercase tracking-[0.22em] text-white/40 font-semibold">
            Our Core Values
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <ValueCard key={i} {...v} delay={i * 0.08} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};
