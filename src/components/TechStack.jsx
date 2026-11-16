import { Reveal, SectionHeader } from "./ui";
import { TECH } from "../data/site";

export const TechStack = () => (
  <section className="section bg-ink-800/40" aria-labelledby="tech-title">
    <div className="container-page">
      <SectionHeader
        id="tech-title"
        align="center"
        eyebrow="Tools we use"
        title="Powered by modern tech."
        lead="We leverage industry-leading frameworks and platforms to build fast, scalable, and beautiful digital experiences."
      />
      <Reveal>
        <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5 sm:gap-3">
          {TECH.map(([name, slug]) => (
            <li
              key={slug}
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-ink-700 py-2 pl-3 pr-4 text-sm font-medium text-stone-200 shadow-card"
            >
              <img src={`/icons/tech/${slug}.svg`} alt="" width="18" height="18" loading="lazy" className="no-outline size-[18px] opacity-90" />
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);
