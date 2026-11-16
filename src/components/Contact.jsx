import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Lock, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Reveal, Eyebrow, WhatsAppIcon } from "./ui";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP, LOCATION } from "../data/site";

const CONTACTS = [
  { Icon: Mail, title: "Email us", value: EMAIL, hint: "We reply within 24 hours", href: `mailto:${EMAIL}` },
  { Icon: Phone, title: "Call us", value: PHONE_DISPLAY, hint: "Mon – Sat, 9am – 6pm WAT", href: `tel:${PHONE_TEL}` },
  { Icon: WhatsAppIcon, title: "WhatsApp", value: "Chat us instantly", hint: "Fastest response channel", href: WHATSAPP, external: true },
  {
    Icon: MapPin,
    title: "Location",
    value: LOCATION,
    hint: "Available for remote projects worldwide",
    href: "https://maps.google.com/?q=Lagos,Nigeria",
    external: true,
  },
];

const MAX_MESSAGE = 1000;
const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };

const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "That email doesn't look right — check for typos.";
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = "Use digits only, e.g. +234 810 000 0000.";
  if (!v.subject.trim()) e.subject = "What's the project about?";
  if (v.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
  return e;
};

const Field = ({ label, name, optional, error, children }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-sm font-medium text-stone-200">
      {label} {optional && <span className="font-normal text-mute">(optional)</span>}
    </label>
    {children}
    {error && (
      <p id={`${name}-error`} className="flex items-center gap-1.5 text-sm text-[#FCA5A5]">
        <AlertCircle size={14} aria-hidden="true" />
        {error}
      </p>
    )}
  </div>
);

const inputCls = (err) =>
  `w-full rounded-xl bg-ink-700 px-4 py-3 text-base text-white placeholder:text-stone-500 outline-none transition-[box-shadow,background-color] duration-200 focus:bg-ink-600 ${
    err
      ? "shadow-[inset_0_0_0_1px_#F87171] focus:shadow-[inset_0_0_0_2px_#F87171]"
      : "shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] focus:shadow-[inset_0_0_0_2px_#FF6B2B]"
  }`;

export const Contact = () => {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const formRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });
    if (Object.keys(errs).length) {
      formRef.current?.querySelector(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          to_email: EMAIL,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setValues(EMPTY);
      setTouched({});
    } catch (err) {
      console.warn("EmailJS error:", err);
      setStatus("error");
    }
  };

  const err = (n) => (touched[n] ? errors[n] : undefined);
  const aria = (n) => ({
    "aria-invalid": err(n) ? true : undefined,
    "aria-describedby": err(n) ? `${n}-error` : undefined,
  });

  return (
    <section id="contact" className="section bg-ink-800/40" aria-labelledby="contact-title">
      <div className="container-page">
        <Reveal className="mb-12 max-w-2xl lg:mb-16">
          <Eyebrow>Contact</Eyebrow>
          <h2 id="contact-title" className="h2 mt-5">
            Let&apos;s build something <span className="text-orange">great.</span>
          </h2>
          <p className="lead mt-5">Have a project in mind? Tell us about it and we&apos;ll get back to you promptly.</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-8 [&>*]:min-w-0">
          <Reveal as="ul" className="grid grid-cols-1 content-start gap-3">
            {CONTACTS.map(({ Icon, title, value, hint, href, external }) => (
              <li key={title}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl bg-ink-800 p-4 shadow-card transition-[background-color,box-shadow] duration-200 hover:bg-ink-700 hover:shadow-lift sm:p-5"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
                    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-mute">{title}</span>
                    <span className="mt-0.5 block truncate font-semibold text-white">{value}</span>
                    <span className="block text-sm text-mute">{hint}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-stone-500 transition-[color,translate] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </Reveal>

          <Reveal delay={0.08}>
            <form ref={formRef} onSubmit={onSubmit} noValidate className="card p-6 sm:p-8" aria-labelledby="form-title">
              <h3 id="form-title" className="text-xl font-bold">
                Send a message
              </h3>
              <p className="mt-1 text-sm text-mute">Free consultation. Fields without “optional” are required.</p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" error={err("name")}>
                  <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={onChange} onBlur={onBlur} placeholder="John Doe" className={inputCls(err("name"))} {...aria("name")} />
                </Field>
                <Field label="Email address" name="email" error={err("email")}>
                  <input id="email" name="email" type="email" inputMode="email" autoComplete="email" value={values.email} onChange={onChange} onBlur={onBlur} placeholder="you@email.com" className={inputCls(err("email"))} {...aria("email")} />
                </Field>
                <Field label="Phone" name="phone" optional error={err("phone")}>
                  <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={onChange} onBlur={onBlur} placeholder="+234 810 000 0000" className={inputCls(err("phone"))} {...aria("phone")} />
                </Field>
                <Field label="Subject" name="subject" error={err("subject")}>
                  <input id="subject" name="subject" type="text" value={values.subject} onChange={onChange} onBlur={onBlur} placeholder="Project type or topic" className={inputCls(err("subject"))} {...aria("subject")} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Message" name="message" error={err("message")}>
                    <textarea id="message" name="message" rows={5} maxLength={MAX_MESSAGE} value={values.message} onChange={onChange} onBlur={onBlur} placeholder="Tell us about your project — timeline, goals, budget…" className={`${inputCls(err("message"))} resize-y`} {...aria("message")} />
                  </Field>
                  <p className="mt-1.5 text-right text-xs tabular-nums text-mute" aria-hidden="true">
                    {values.message.length} / {MAX_MESSAGE}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-sm text-mute">
                  <Lock size={14} aria-hidden="true" />
                  Your information is kept private and never shared.
                </p>
                <button type="submit" disabled={status === "sending"} className="btn-primary disabled:cursor-wait disabled:opacity-70">
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    <>
                      Send message <Send size={16} strokeWidth={2.25} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>

              <div aria-live="polite" role="status">
                {status === "success" && (
                  <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-emerald-500/10 p-4 text-sm text-emerald-300">
                    <CheckCircle2 size={18} className="shrink-0" aria-hidden="true" />
                    Message sent! We&apos;ll get back to you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-red-500/10 p-4 text-sm text-red-300">
                    <AlertCircle size={18} className="shrink-0" aria-hidden="true" />
                    <span>
                      Something went wrong. Try again or{" "}
                      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
                        reach us on WhatsApp
                      </a>
                      .
                    </span>
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
