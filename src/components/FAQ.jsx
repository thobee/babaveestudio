import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal, Eyebrow } from "./ui";
import { faqs } from "../data/faq";

const Item = ({ faq, open, onToggle }) => {
  const btnId = `faq-q-${faq.id}`;
  const panelId = `faq-a-${faq.id}`;
  return (
    <div className={`rounded-2xl transition-colors duration-200 ${open ? "bg-ink-700" : "bg-ink-800"} shadow-card`}>
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-[64px] w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-semibold text-white sm:px-6 sm:text-[17px]"
        >
          {faq.question}
          <span
            className={`grid size-8 shrink-0 place-items-center rounded-full transition-[background-color,color,rotate] duration-300 ${
              open ? "rotate-45 bg-orange text-ink" : "bg-white/[0.06] text-stone-300"
            }`}
            aria-hidden="true"
          >
            <Plus size={16} strokeWidth={2.25} />
          </span>
        </button>
      </h3>
      {/* grid-rows trick animates height without measuring */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-6 leading-relaxed text-mute sm:px-6">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openId, setOpenId] = useState(faqs[0]?.id);
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-title" className="h2 mt-5">
            Frequently asked questions.
          </h2>
          <p className="lead mt-5">Everything you need to know before we start working together.</p>
          <p className="mt-6 text-mute">
            Still have questions?{" "}
            <a href="#contact" className="inline-flex min-h-[44px] items-center font-semibold text-orange underline-offset-4 hover:underline">
              Let&apos;s talk →
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col gap-3">
          {faqs.map((f) => (
            <Item key={f.id} faq={f} open={openId === f.id} onToggle={() => setOpenId(openId === f.id ? null : f.id)} />
          ))}
        </Reveal>
      </div>
    </section>
  );
};
