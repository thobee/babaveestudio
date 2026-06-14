import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Zap } from "lucide-react";

const services = [
  {
    num: "01",
    faIcon: "fa-globe",
    faStyle: "fas",
    color: "#0EA5E9",
    category: "Frontend Solutions",
    title: "Web Development",
    description:
      "We engineer blazing-fast, responsive websites and progressive web apps that turn visitors into loyal customers. From landing pages to complex SaaS platforms, every line of code is built for scale.",
    features: ["Responsive Design", "Progressive Web Apps", "E-Commerce Platforms", "Performance Tuning", "SEO Architecture"],
  },
  {
    num: "02",
    faIcon: "fa-mobile-screen",
    faStyle: "fas",
    color: "#FF6B2B",
    category: "Mobile First",
    title: "App Development",
    description:
      "Native iOS and Android experiences built with React Native and Flutter. We craft apps that feel intuitive, load instantly, and keep users coming back.",
    features: ["iOS & Android Native", "Cross-Platform (Flutter)", "App Store Optimisation", "Real-Time Sync", "Push Notifications"],
  },
  {
    num: "03",
    faIcon: "fa-server",
    faStyle: "fas",
    color: "#F59E0B",
    category: "Backend & Infrastructure",
    title: "Backend Engineering",
    description:
      "Scalable APIs, robust databases, and cloud infrastructure that won't buckle under pressure. We architect the engine room so your product runs flawlessly at any scale.",
    features: ["REST & GraphQL APIs", "Database Architecture", "Cloud Deployment", "Microservices", "DevOps & CI/CD"],
  },
  {
    num: "04",
    faIcon: "fa-pen-nib",
    faStyle: "fas",
    color: "#A855F7",
    category: "Design & Strategy",
    title: "UI/UX & Brand Strategy",
    description:
      "Design isn't decoration — it's strategy. We map user journeys, prototype interactions, and build visual systems that make your brand unforgettable.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing", "Brand Identity"],
  },
  {
    num: "05",
    faIcon: "fa-cart-shopping",
    faStyle: "fas",
    color: "#EF4444",
    category: "E-Commerce",
    title: "E-Commerce Solutions",
    description:
      "End-to-end online stores with seamless checkout flows, payment integrations, and inventory management. Built to convert browsers into buyers.",
    features: ["Store Development", "Payment Gateways", "Inventory Systems", "Analytics Dashboard", "Conversion Optimisation"],
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-24 md:py-32 relative z-10 bg-gradient-to-b from-[#060a12] via-[#0a0f1a] to-[#060a12] border-t border-white/[0.06] overflow-hidden"
    >
      {/* FA CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[900px] h-[700px] rounded-full blur-[200px] pointer-events-none opacity-30 translate-x-1/3 -translate-y-1/4"
        style={{ background: "radial-gradient(ellipse, rgba(14,165,233,0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[700px] h-[600px] rounded-full blur-[180px] pointer-events-none opacity-25 -translate-x-1/4 translate-y-1/4"
        style={{ background: "radial-gradient(ellipse, rgba(255,107,43,0.12) 0%, transparent 70%)" }} />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10 relative z-10">

        {/* ══════════════════════════════════════
            HEADER — PROFESSIONAL & BOLD
        ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-18"
        >
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-[3px] rounded-full bg-[#ff6b35]" />
            <span className="font-syne text-[11px] font-bold uppercase tracking-[0.28em] text-[#ff6b35]">
              Our Services
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2
                className="font-syne font-black text-white leading-[1.06] tracking-[-0.025em] mb-0"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                What We Build &amp;
              </h2>
              <h2
                className="font-syne font-black leading-[1.06] tracking-[-0.025em]"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  background: "linear-gradient(90deg, #ff6b35 0%, #f59e0b 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                How We Deliver.
              </h2>
            </div>
            <p className="font-sans text-white/45 text-[15px] leading-[1.85] max-w-sm lg:text-right">
              End-to-end digital craftsmanship — from pixel-perfect interfaces to rock-solid backend infrastructure.
            </p>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════
            BENTO GRID — POLISHED LIGHT CARDS
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">

          {/* ── 1. Web Development — FEATURED 8 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2 lg:col-span-8 group relative flex flex-col bg-[#f8f9fb] border border-[#e4e7eb] rounded-2xl overflow-hidden
              hover:bg-white hover:border-[#0EA5E9]/40 hover:shadow-[0_20px_60px_rgba(14,165,233,0.14)] transition-all duration-500"
          >
            {/* top color bar */}
            <div className="h-[3px] w-full" style={{ background: services[0].color }} />

            <div className="relative flex flex-col flex-grow p-7 sm:p-9">
              {/* watermark */}
              <i className={`${services[0].faStyle} ${services[0].faIcon} absolute -right-6 -bottom-5 opacity-[0.045] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none select-none`}
                style={{ fontSize: "13rem", color: services[0].color }} />

              <div className="relative z-10 flex flex-col flex-grow">
                {/* top row: category + number */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-syne text-[10.5px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full"
                    style={{ color: services[0].color, background: `${services[0].color}14` }}
                  >
                    {services[0].category}
                  </span>
                  <span className="font-syne font-black text-[2.5rem] leading-none opacity-[0.07] select-none">
                    {services[0].num}
                  </span>
                </div>

                {/* icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border"
                  style={{ background: `${services[0].color}18`, borderColor: `${services[0].color}30` }}
                >
                  <i className={`${services[0].faStyle} ${services[0].faIcon} text-xl`} style={{ color: services[0].color }} />
                </div>

                <h3 className="font-syne font-black text-[#0d1117] text-[1.6rem] leading-tight mb-4">
                  {services[0].title}
                </h3>
                <p className="font-sans text-[#444c5c] text-[14.5px] leading-[1.8] mb-8 max-w-lg">
                  {services[0].description}
                </p>

                {/* feature chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {services[0].features.map((f, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 font-sans text-[11.5px] font-medium text-[#0d1117] bg-white border border-[#dde1e7] px-3 py-1 rounded-full shadow-sm"
                    >
                      <CheckCircle2 size={10} style={{ color: services[0].color }} />
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="self-start inline-flex items-center gap-2 font-syne font-bold text-[12px] uppercase tracking-[0.18em] hover:gap-4 transition-all duration-300"
                  style={{ color: services[0].color }}
                >
                  Explore Capabilities <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── 2. App Development — 4 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.65, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-1 lg:col-span-4 group relative flex flex-col bg-[#f8f9fb] border border-[#e4e7eb] rounded-2xl overflow-hidden
              hover:bg-white hover:border-[#FF6B2B]/40 hover:shadow-[0_20px_60px_rgba(255,107,43,0.12)] transition-all duration-500"
          >
            <div className="h-[3px] w-full" style={{ background: services[1].color }} />
            <div className="relative flex flex-col flex-grow p-7">
              <i className={`${services[1].faStyle} ${services[1].faIcon} absolute -right-4 -bottom-4 opacity-[0.045] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none select-none`}
                style={{ fontSize: "9rem", color: services[1].color }} />

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-syne text-[10.5px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full"
                    style={{ color: services[1].color, background: `${services[1].color}14` }}
                  >
                    {services[1].category}
                  </span>
                  <span className="font-syne font-black text-[2rem] leading-none opacity-[0.07] select-none">{services[1].num}</span>
                </div>

                <div
                  className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border"
                  style={{ background: `${services[1].color}18`, borderColor: `${services[1].color}30` }}
                >
                  <i className={`${services[1].faStyle} ${services[1].faIcon} text-lg`} style={{ color: services[1].color }} />
                </div>

                <h3 className="font-syne font-black text-[#0d1117] text-[1.2rem] leading-snug mb-3">
                  {services[1].title}
                </h3>
                <p className="font-sans text-[#444c5c] text-[13.5px] leading-[1.75] mb-6 flex-grow">
                  {services[1].description}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {services[1].features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 font-sans text-[12.5px] text-[#555e6d]">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: services[1].color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ── 3. UI/UX — 4 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.65, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-1 lg:col-span-4 group relative flex flex-col bg-[#f8f9fb] border border-[#e4e7eb] rounded-2xl overflow-hidden
              hover:bg-white hover:border-[#A855F7]/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.12)] transition-all duration-500"
          >
            <div className="h-[3px] w-full" style={{ background: services[3].color }} />
            <div className="relative flex flex-col flex-grow p-7">
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-syne text-[10.5px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full"
                    style={{ color: services[3].color, background: `${services[3].color}14` }}
                  >
                    {services[3].category}
                  </span>
                  <span className="font-syne font-black text-[2rem] leading-none opacity-[0.07] select-none">{services[3].num}</span>
                </div>

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border"
                  style={{ background: `${services[3].color}18`, borderColor: `${services[3].color}30` }}
                >
                  <i className={`${services[3].faStyle} ${services[3].faIcon} text-lg`} style={{ color: services[3].color }} />
                </div>

                <h3 className="font-syne font-black text-[#0d1117] text-[1.2rem] leading-snug mb-3">
                  {services[3].title}
                </h3>
                <p className="font-sans text-[#444c5c] text-[13.5px] leading-[1.75] mb-6 flex-grow">
                  {services[3].description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {services[3].features.map((f, i) => (
                    <span
                      key={i}
                      className="font-sans text-[11px] font-medium px-2.5 py-1 rounded-lg border"
                      style={{ color: services[3].color, background: `${services[3].color}10`, borderColor: `${services[3].color}25` }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── 4. Backend Engineering — 8 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.65, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2 lg:col-span-8 group relative flex flex-col bg-[#f8f9fb] border border-[#e4e7eb] rounded-2xl overflow-hidden
              hover:bg-white hover:border-[#F59E0B]/40 hover:shadow-[0_20px_60px_rgba(245,158,11,0.12)] transition-all duration-500"
          >
            <div className="h-[3px] w-full" style={{ background: services[2].color }} />
            <div className="relative flex flex-col flex-grow p-7 sm:p-9">
              <div className="relative z-10 flex flex-col md:flex-row md:gap-9 flex-grow">
                {/* left text */}
                <div className="md:w-[48%] flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-syne text-[10.5px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full"
                      style={{ color: services[2].color, background: `${services[2].color}14` }}
                    >
                      {services[2].category}
                    </span>
                    <span className="font-syne font-black text-[2rem] leading-none opacity-[0.07] select-none">{services[2].num}</span>
                  </div>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border"
                    style={{ background: `${services[2].color}18`, borderColor: `${services[2].color}30` }}
                  >
                    <i className={`${services[2].faStyle} ${services[2].faIcon} text-xl`} style={{ color: services[2].color }} />
                  </div>
                  <h3 className="font-syne font-black text-[#0d1117] text-[1.4rem] leading-tight mb-3">
                    {services[2].title}
                  </h3>
                  <p className="font-sans text-[#444c5c] text-[14px] leading-[1.8] mb-6 flex-grow">
                    {services[2].description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {services[2].features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 font-sans text-[12.5px] text-[#555e6d]">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: services[2].color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* right: status terminal */}
                <div className="md:flex-1 flex flex-col justify-center mt-7 md:mt-0">
                  <div className="rounded-xl overflow-hidden border border-[#e4e7eb] bg-[#0d1117]">
                    {/* terminal header */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.04]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                      <span className="ml-2 font-mono text-[10px] text-white/30">system-status.sh</span>
                    </div>
                    {/* rows */}
                    <div className="p-4 space-y-2.5">
                      {[
                        { label: "API CLUSTER-01",  status: "OPERATIONAL", dot: "#22C55E" },
                        { label: "DATA PIPELINE",   status: "STREAMING",   dot: "#0EA5E9" },
                        { label: "K8S NODE_ALPHA",  status: "STABLE",      dot: "#22C55E" },
                        { label: "CI/CD PIPELINE",  status: "PASSING",     dot: "#22C55E" },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between px-3.5 py-2.5 rounded-lg"
                          style={{ borderLeft: `2px solid ${services[2].color}`, background: "rgba(255,255,255,0.04)" }}
                        >
                          <span className="font-mono text-[10.5px] uppercase tracking-wider text-white/55">{row.label}</span>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: row.dot }} />
                            <span className="font-mono text-[10px] font-bold uppercase" style={{ color: row.dot }}>{row.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── 5. E-Commerce — FULL WIDTH 12 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2 lg:col-span-12 group relative flex flex-col bg-[#f8f9fb] border border-[#e4e7eb] rounded-2xl overflow-hidden
              hover:bg-white hover:border-[#EF4444]/35 hover:shadow-[0_20px_60px_rgba(239,68,68,0.1)] transition-all duration-500"
          >
            <div className="h-[3px] w-full" style={{ background: services[4].color }} />
            <div className="relative flex flex-col md:flex-row md:items-center md:gap-14 p-7 sm:p-9">
              <i className={`${services[4].faStyle} ${services[4].faIcon} absolute right-6 -bottom-4 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none select-none`}
                style={{ fontSize: "15rem", color: services[4].color }} />

              {/* left */}
              <div className="md:w-[36%] shrink-0 relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-syne text-[10.5px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full"
                    style={{ color: services[4].color, background: `${services[4].color}14` }}
                  >
                    {services[4].category}
                  </span>
                  <span className="font-syne font-black text-[2rem] leading-none opacity-[0.07] select-none">{services[4].num}</span>
                </div>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border"
                  style={{ background: `${services[4].color}18`, borderColor: `${services[4].color}30` }}
                >
                  <i className={`${services[4].faStyle} ${services[4].faIcon} text-xl`} style={{ color: services[4].color }} />
                </div>
                <h3 className="font-syne font-black text-[#0d1117] text-[1.5rem] leading-tight mb-4">
                  {services[4].title}
                </h3>
                <p className="font-sans text-[#444c5c] text-[14.5px] leading-[1.8]">
                  {services[4].description}
                </p>
              </div>

              {/* right: feature tiles */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8 md:mt-0 relative z-10">
                {services[4].features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white border border-[#e4e7eb] rounded-xl px-4 py-3.5 hover:border-[#EF4444]/30 hover:shadow-[0_4px_16px_rgba(239,68,68,0.08)] transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${services[4].color}14` }}
                    >
                      <i className={`${services[4].faStyle} ${services[4].faIcon} text-[10px]`} style={{ color: services[4].color }} />
                    </div>
                    <span className="font-sans text-[13px] font-medium text-[#0d1117]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>{/* end grid */}

        {/* ══════════════════════════════════════
            BOTTOM CTA BANNER
        ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-[#f8f9fb] border border-[#e4e7eb] rounded-2xl px-7 py-6
            hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-400"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center shrink-0">
              <Zap size={19} className="text-[#ff6b35]" />
            </div>
            <div>
              <p className="font-syne font-black text-[#0d1117] text-[16px] mb-1">Not sure where to start?</p>
              <p className="font-sans text-[#555e6d] text-[13.5px] leading-[1.7]">
                Tell us about your project. We'll map out the right stack, timeline &amp; budget — no strings attached.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/2348102877413?text=Hi%20BabaVee%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#ff6b35] text-white font-syne font-bold text-[13px] px-6 py-3.5 rounded-full
                hover:bg-orange-500 hover:shadow-[0_8px_28px_rgba(255,107,43,0.35)] transition-all duration-300"
            >
              <MessageCircle size={14} />
              Chat on WhatsApp
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="hidden sm:block font-sans text-[#888] text-[12.5px] font-medium hover:text-[#ff6b35] transition-colors underline underline-offset-2"
            >
              or fill a form
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};