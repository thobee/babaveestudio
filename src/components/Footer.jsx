import { Logo } from "./Navbar";
import { WhatsAppIcon, Reveal } from "./ui";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP, LOCATION, SOCIALS } from "../data/site";

const SocialIcon = ({ name }) => {
  const p = {
    x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    tiktok:
      "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
    linkedin:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    instagram:
      "M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.382.896-.422.164-1.056.36-2.227.413-1.266.058-1.646.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.382-.164-.422-.36-1.057-.413-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.381.42-.419.819-.679 1.382-.896.422-.166 1.057-.36 2.227-.415 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.902.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.903.131 5.775.072 7.053.012 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.059 1.277.261 2.15.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.059 2.15-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.059-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  }[name];
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={p} />
    </svg>
  );
};

const COLS = [
  {
    title: "Quick links",
    links: [
      ["Our work", "#work"],
      ["Services", "#services"],
      ["About us", "#about"],
      ["FAQ", "#faq"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Web development", "#services"],
      ["UI/UX design", "#services"],
      ["E-commerce", "#services"],
      ["Mobile apps", "#services"],
    ],
  },
];

const linkCls = "inline-flex min-h-[44px] min-w-[44px] items-center text-[15px] text-mute transition-colors duration-200 hover:text-white";

export const Footer = () => (
  <footer className="pt-20 sm:pt-24">
    <div className="container-page">
      {/* closing call to action (was the orange banner) */}
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-orange px-6 py-10 text-ink shadow-cta sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-[1.75rem] font-extrabold leading-tight text-ink sm:text-4xl" style={{ letterSpacing: "-0.03em" }}>
              Looking to create a website?
            </h2>
            <p className="mt-2 max-w-xl text-[17px] font-medium text-ink/80">
              Contact BabaVee Studio. We build fast, stunning websites and web apps.
            </p>
          </div>
          <div className="relative mt-7 flex flex-wrap items-center gap-3 lg:mt-0 lg:shrink-0">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-ink text-white shadow-[0_8px_20px_-6px_rgb(0_0_0/0.5)] hover:bg-ink-700"
            >
              <WhatsAppIcon size={18} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
            <a href="#contact" className="btn text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-ink">
              Or fill the form
            </a>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-mute">
            Building the web, one product at a time. We design and build fast, scalable websites and apps that help your
            business grow online.
          </p>
          <ul className="mt-6 flex gap-2">
            {SOCIALS.map((s) => (
              <li key={s.icon}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`BabaVee Studio on ${s.name}`}
                  className="grid size-11 place-items-center rounded-full bg-white/[0.05] text-stone-300 transition-[background-color,color,scale] duration-200 hover:bg-orange hover:text-ink active:scale-[0.96]"
                >
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {COLS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold text-white">{col.title}</h2>
            <ul className="mt-3">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className={linkCls}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-3">
            <li>
              <a href={`mailto:${EMAIL}`} className={`${linkCls} break-all`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className={linkCls}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex min-h-[44px] items-center text-[15px] text-mute">{LOCATION}</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-8 text-sm text-mute shadow-[0_-1px_0_rgb(255_255_255/0.06)] sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} BabaVee Studio. All rights reserved.</p>
        <p>Made in {LOCATION}</p>
      </div>
    </div>
  </footer>
);
