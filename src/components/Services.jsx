import { Check } from "lucide-react";
import { Reveal, SectionHeader, WhatsAppIcon } from "./ui";
import { services } from "../data/services";
import { WHATSAPP } from "../data/site";

const ServiceCard = ({ service, wide, delay }) => {
  const Icon = service.icon;
  return (
    <Reveal delay={delay} className={wide ? "lg:col-span-2" : ""}>
      <article className="card flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-center gap-4">
          {/* 12px radius chip inside a 24px card with 24–32px padding */}
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange shadow-[inset_0_0_0_1px_rgb(255_107_43/0.2)]">
            <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mute">{service.category}</p>
        </div>
        <h3 className="mt-6 text-xl font-bold sm:text-2xl">{service.title}</h3>
        <p className={`mt-3 leading-relaxed text-mute ${wide ? "max-w-2xl" : ""}`}>{service.description}</p>
        <ul className={`mt-6 grid gap-2.5 pt-6 shadow-[0_-1px_0_rgb(255_255_255/0.06)] ${wide ? "sm:grid-cols-2" : ""}`}>
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[15px] text-stone-300">
              <Check size={16} strokeWidth={2} className="mt-[3px] shrink-0 text-orange" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
};

export const Services = () => (
  <section id="services" className="section bg-ink-800/40" aria-labelledby="services-title">
    <div className="container-page">
      <SectionHeader
        id="services-title"
        eyebrow="Our services"
        title="What we build & how we deliver."
        lead="End-to-end digital craftsmanship — from pixel-perfect interfaces to rock-solid backend infrastructure."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} wide={i === 0} delay={(i % 3) * 0.06} />
        ))}
      </div>

      <Reveal className="mt-6">
        <div className="card flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="text-lg font-bold">Not sure where to start?</h3>
            <p className="mt-1 text-mute">
              Tell us about your project. We&apos;ll map out the right stack, timeline &amp; budget — no strings attached.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </a>
            <a href="#contact" className="btn-ghost">
              Or fill the form
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
