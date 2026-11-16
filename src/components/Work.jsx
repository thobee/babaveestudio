import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader, BrowserFrame } from "./ui";
import { projects, srcSet, src } from "../data/projects";

const hostOf = (url) => new URL(url).host;

const ProjectCard = ({ project, featured, delay }) => (
  <Reveal delay={delay} className={featured ? "md:col-span-2" : ""}>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group card flex h-full flex-col gap-6 p-3 transition-shadow duration-300 hover:shadow-lift sm:p-4 ${
        featured ? "lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-10" : ""
      }`}
    >
      <BrowserFrame label={hostOf(project.link)} className="!shadow-none">
        <img
          src={src(project)}
          srcSet={srcSet(project)}
          sizes={featured ? "(min-width: 1024px) 640px, 92vw" : "(min-width: 768px) 560px, 92vw"}
          width="1280"
          height="800"
          loading="lazy"
          decoding="async"
          alt={`${project.title} — screenshot`}
          className="no-outline aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </BrowserFrame>

      <div className="flex flex-1 flex-col px-2 pb-3 sm:px-3">
        <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-mute">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
          {project.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-orange lg:mt-auto lg:pt-6">
          Visit live site
          <ArrowUpRight
            size={17}
            strokeWidth={2.25}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          <span className="sr-only">(opens in a new tab)</span>
        </span>
      </div>
    </a>
  </Reveal>
);

export const Work = () => (
  <section id="work" className="section" aria-labelledby="work-title">
    <div className="container-page">
      <SectionHeader
        id="work-title"
        eyebrow="Selected work"
        title="Recent projects, live and ready to click through."
        lead="A few of the websites we've designed and built. Each one opens the live site."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} featured={i === 0} delay={i === 0 ? 0 : (i - 1) * 0.08} />
        ))}
      </div>
    </div>
  </section>
);
