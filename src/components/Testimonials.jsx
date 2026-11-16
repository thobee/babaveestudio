import { Reveal, SectionHeader } from "./ui";
import { testimonials, SHOW_TESTIMONIALS } from "../data/testimonials";

// Rendered only when SHOW_TESTIMONIALS is true in src/data/testimonials.js.
export const Testimonials = () => {
  if (!SHOW_TESTIMONIALS) return null;
  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container-page">
        <SectionHeader
          id="testimonials-title"
          eyebrow="Testimonials"
          title="What our clients say."
          lead="Don't take our word for it — hear directly from the people we've worked with."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.06}>
              <figure className="card flex h-full flex-col p-7">
                <blockquote className="flex-1 leading-relaxed text-stone-200">“{t.content}”</blockquote>
                <figcaption className="mt-6">
                  <span className="block font-semibold text-white">{t.name}</span>
                  <span className="block text-sm text-mute">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
