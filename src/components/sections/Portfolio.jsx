import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

import { projects } from "../../data/projects";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const Portfolio = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.08 });

  return (
    <section
      id="work"
      className="py-28 relative z-10 bg-[#0A1628] border-t border-white/5 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 80%)",
        }}
      />

      {/* Overlapping Premium Glows */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-orange/[0.05] rounded-full blur-[130px] pointer-events-none -translate-y-1/2 translate-x-1/4"
        style={{
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] bg-[#6366F1]/[0.03] rounded-full blur-[120px] pointer-events-none translate-y-1/3"
        style={{
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#0A1628] rounded-full blur-[100px] pointer-events-none"
        style={{
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            {/* Label with line accent */}
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span
                className="block w-6 h-[2px] rounded-full"
                style={{ background: "#FF6B2B" }}
              />
              <span
                className="font-syne text-[10.5px] uppercase tracking-[0.28em] font-bold"
                style={{ color: "#FF6B2B" }}
              >
                Portfolio
              </span>
            </div>

            <h2
              className="font-syne font-extrabold text-white tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)", lineHeight: 1.08 }}
            >
              Our{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B2B 0%, #FFA07A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Beautiful
              </span>{" "}
              Works
            </h2>

            <p className="font-sans text-white/45 text-[13.5px] mt-4 max-w-[440px] leading-relaxed">
              As the top web designers in Nigeria, we've poured our hearts into
              hundreds of projects — here are some of our finest.
            </p>
          </div>

          <a
            href="#contact"
            className="group shrink-0 inline-flex items-center gap-2 font-sans text-[12.5px] font-semibold transition-all duration-300"
            style={{ color: "#FF6B2B" }}
          >
            View all projects
            <ArrowRight
              size={13}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col rounded-2xl overflow-hidden cursor-pointer bg-white border border-black/5 shadow-md hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-300"
            >
              {/* Image with overlays */}
              <div
                className="relative w-full shrink-0 overflow-hidden"
                style={{ height: "220px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.06] transition-transform duration-700 ease-in-out"
                />
                {/* Bottom scrim for readability */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,14,28,0.78) 0%, rgba(6,14,28,0.15) 50%, transparent 100%)",
                  }}
                />
                {/* Category badge — floated on image bottom */}
                {project.category && (
                  <span
                    className="absolute bottom-3 left-3 font-sans font-bold uppercase"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.14em",
                      color: "#fff",
                      background: "rgba(255,107,43,0.88)",
                      backdropFilter: "blur(6px)",
                      padding: "3px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    {project.category}
                  </span>
                )}
                {/* Featured badge */}
                {project.featured && (
                  <span
                    className="absolute top-3 right-3 font-sans font-bold"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: "#fff",
                      background: "rgba(10,22,40,0.72)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      padding: "3px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    ✦ Featured
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-grow px-5 pt-5 pb-5">
                {/* Title */}
                <h3
                  className="font-syne font-extrabold text-gray-900 leading-snug mb-2 group-hover:text-brand-orange transition-colors duration-300"
                  style={{ fontSize: "15.5px" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="font-sans text-gray-500 leading-relaxed flex-grow"
                  style={{ fontSize: "13px", lineHeight: "1.65" }}
                >
                  {project.description}
                </p>

                {/* Footer row */}
                <div
                  className="flex items-center justify-between mt-5 pt-4"
                  style={{ borderTop: "1px solid #f0f0f0" }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 font-sans font-bold transition-all duration-300 hover:gap-3"
                    style={{ fontSize: "12px", color: "#FF6B2B" }}
                  >
                    <ExternalLink size={11} />
                    View Project
                  </a>

                  {/* Arrow icon pill */}
                  <div className="flex items-center justify-center rounded-full transition-all duration-300 w-[30px] h-[30px] bg-brand-orange/10 border border-brand-orange/20 group-hover/link:bg-brand-orange group-hover/link:border-brand-orange">
                    <ArrowRight
                      size={12}
                      className="text-brand-orange group-hover/link:text-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-sans font-semibold text-white transition-all duration-300 text-[13px] px-9 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-gradient-to-br hover:from-[#FF6B2B] hover:to-[#e85a1f] hover:border-brand-orange hover:shadow-[0_12px_40px_rgba(255,107,43,0.4)] hover:-translate-y-0.5"
            style={{
              WebkitBackfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            See Full Portfolio
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
