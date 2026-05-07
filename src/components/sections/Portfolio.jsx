import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Portfolio = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.08 });

  return (
    <section id="work" className="py-28 relative z-10 bg-[#0A1628] border-t border-white/5 overflow-hidden">

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

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
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-orange font-semibold">
              Portfolio
            </span>
            <h2
              className="font-syne font-extrabold text-white tracking-tight mt-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Our Beautiful Works
            </h2>
            <p className="font-sans text-white/40 text-[14px] mt-3 max-w-[460px] leading-relaxed">
              As the top web designers in Nigeria, we've poured our hearts into hundreds of projects. Here are some of our works.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-brand-orange hover:gap-3 transition-all duration-300"
          >
            View all projects
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Cards — matching screenshot style */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col bg-[#060d1a] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-400"
            >
              {/* Image — tall, no padding, edge to edge */}
              <div className="relative w-full h-[320px] overflow-hidden bg-[#0d1a2e] shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-all duration-[5s] ease-in-out group-hover:object-bottom"
                />
              </div>

              {/* Content — matches screenshot: white text, plain bg, minimal */}
              <div className="flex flex-col flex-grow px-6 pt-6 pb-7">

                {/* Title */}
                <h3 className="font-syne font-bold text-white text-[22px] leading-[1.25] mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-white/50 text-[14px] leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tags — plain text style like screenshot */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[13px] text-white/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer row — View Project + Live Preview */}
                <div className="flex items-center justify-between pt-5 border-t border-white/[0.07]">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 font-sans text-[14px] font-semibold text-white hover:text-brand-orange transition-colors duration-300 group/link"
                  >
                    View Project
                    <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 font-sans text-[14px] font-semibold text-white/40 hover:text-brand-orange transition-colors duration-300"
                  >
                    Live preview
                    <ExternalLink size={13} />
                  </a>
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
          className="flex justify-center mt-14"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-sans text-[13px] font-semibold hover:bg-brand-orange hover:border-brand-orange hover:shadow-[0_8px_24px_rgba(249,115,22,0.3)] transition-all duration-300"
          >
            See Full Portfolio
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};