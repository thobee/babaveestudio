import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

/* ── WhatsApp brand SVG icon ── */
const WhatsAppIcon = ({ size = 16, color = "#fff" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* section background — used for scallop "cutout" circles */
const SECTION_BG = "#0A1628";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          phone:      formData.phone,
          subject:    formData.subject,
          message:    formData.message,
          to_email:   "babaveetech@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: "Email us",
      value: "babaveetech@gmail.com",
      href: "mailto:babaveetech@gmail.com",
      hint: "We reply within 24 hours",
      accentColor: "#FF6B2B",
    },
    {
      Icon: Phone,
      title: "Call us",
      value: "+234 810 287 7413",
      href: "tel:+2348102877413",
      hint: "Mon – Sat, 9am – 6pm WAT",
      accentColor: "#FF6B2B",
    },
    {
      Icon: WhatsAppIcon,
      title: "WhatsApp",
      value: "Chat us instantly",
      href: "https://wa.me/2348102877413?text=Hi%20BabaVee%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project!",
      hint: "Fastest response channel",
      accentColor: "#25D366",
      isWhatsApp: true,
    },
    {
      Icon: MapPin,
      title: "Location",
      value: "Lagos, Nigeria",
      href: "https://maps.google.com/?q=Lagos,Nigeria",
      hint: "Available for remote worldwide",
      accentColor: "#FF6B2B",
    },
  ];

  /* shared input helpers */
  const inputBase =
    "w-full font-sans text-[13.5px] text-white placeholder-white/20 rounded-xl px-4 py-3.5 outline-none resize-none transition-all duration-300";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.09)",
  };
  const onFocus = (e) => {
    e.target.style.borderColor = "rgba(255,107,43,0.55)";
    e.target.style.background = "rgba(255,255,255,0.07)";
    e.target.style.boxShadow = "0 0 0 3px rgba(255,107,43,0.08)";
  };
  const onBlur = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.09)";
    e.target.style.background = "rgba(255,255,255,0.04)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#0A1628] text-white overflow-hidden border-t border-white/5"
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 15%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 15%, transparent 85%)",
        }}
      />
      {/* Glows */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,107,43,0.07) 0%, transparent 65%)" }}
      />
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none -translate-y-1/3 translate-x-1/4"
        style={{ background: "radial-gradient(circle, rgba(255,107,43,0.055) 0%, transparent 65%)" }}
      />
      {/* Vertical line accent */}
      <div
        className="absolute top-0 left-[20%] w-px h-full pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,107,43,0.18), transparent)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >

          {/* ── Header ── */}
          <motion.div variants={item} className="mb-16">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="block w-6 h-[2px] rounded-full bg-brand-orange" />
              <span className="font-syne text-[10.5px] uppercase tracking-[0.28em] font-bold text-brand-orange">
                Contact
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <h2
                className="font-syne font-extrabold text-white tracking-tight"
                style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.1rem)", lineHeight: 1.07 }}
              >
                Let's Build Something{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6B2B 0%, #FFA07A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Great
                </span>
              </h2>
              <p className="font-sans text-white/38 text-[13.5px] max-w-[340px] leading-relaxed md:text-right">
                Have a project in mind? Tell us about it and we'll get back to you promptly.
              </p>
            </div>

            {/* Stat pills row */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { value: "< 3 hrs", label: "Avg. response" },
                { value: "100+", label: "Projects delivered" },
                { value: "5.0 ★", label: "Client rating" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="font-syne font-bold text-brand-orange" style={{ fontSize: "13px" }}>
                    {s.value}
                  </span>
                  <span className="font-sans text-white/35" style={{ fontSize: "11.5px" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Body grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left — ticket-stub contact cards */}
            <motion.div variants={item} className="lg:col-span-2 flex flex-col gap-3">

              {contactInfo.map(({ Icon, title, value, href, hint, accentColor, isWhatsApp }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl px-5 py-4"
                  style={{
                    textDecoration: "none",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isWhatsApp
                      ? "rgba(37,211,102,0.06)"
                      : "rgba(255,107,43,0.05)";
                    e.currentTarget.style.borderColor = isWhatsApp
                      ? "rgba(37,211,102,0.25)"
                      : "rgba(255,107,43,0.22)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="shrink-0 flex items-center justify-center rounded-xl"
                    style={{
                      width: "42px",
                      height: "42px",
                      background: isWhatsApp ? "rgba(37,211,102,0.1)" : "rgba(255,107,43,0.1)",
                      border: isWhatsApp ? "1px solid rgba(37,211,102,0.18)" : "1px solid rgba(255,107,43,0.18)",
                    }}
                  >
                    <Icon size={17} color={accentColor} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col min-w-0 flex-grow">
                    <span
                      className="font-sans uppercase"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        color: isWhatsApp ? "rgba(37,211,102,0.55)" : "rgba(255,107,43,0.6)",
                      }}
                    >
                      {title}
                    </span>
                    <span
                      className="font-syne font-bold text-white truncate mt-0.5"
                      style={{ fontSize: "13px" }}
                    >
                      {value}
                    </span>
                    <span className="font-sans text-white/30 mt-0.5" style={{ fontSize: "11px" }}>
                      {hint}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    size={14}
                    className="shrink-0 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: "rgba(255,255,255,0.15)" }}
                  />
                </a>
              ))}

              {/* Trust note */}
              <div
                className="rounded-2xl px-5 py-4 mt-1 flex items-start gap-3"
                style={{
                  background: "rgba(255,107,43,0.04)",
                  border: "1px solid rgba(255,107,43,0.1)",
                }}
              >
                <div
                  className="shrink-0 w-0.5 self-stretch rounded-full"
                  style={{ background: "linear-gradient(to bottom, #FF6B2B, rgba(255,107,43,0.15))" }}
                />
                <p className="font-sans text-white/42 leading-relaxed" style={{ fontSize: "11.5px" }}>
                  Based in <strong className="text-white/60 font-semibold">Lagos, Nigeria</strong> — available for remote projects worldwide. Average response under 3 hrs.
                </p>
              </div>
            </motion.div>

            {/* Right — Form panel */}
            <motion.div variants={item} className="lg:col-span-3">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.032)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Orange gradient top bar */}
                <div
                  style={{
                    height: "3px",
                    background: "linear-gradient(90deg, #FF6B2B 0%, rgba(255,107,43,0.18) 55%, transparent 100%)",
                  }}
                />

                <div className="p-8">
                  {/* Form header */}
                  <div className="flex items-center justify-between mb-7">
                    <h3
                      className="font-syne font-extrabold text-white"
                      style={{ fontSize: "16.5px" }}
                    >
                      Send a message
                    </h3>
                    <span
                      className="font-sans px-3 py-1 rounded-full"
                      style={{
                        fontSize: "10px",
                        color: "#FF6B2B",
                        background: "rgba(255,107,43,0.09)",
                        border: "1px solid rgba(255,107,43,0.18)",
                      }}
                    >
                      Free consultation
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-white/40 text-[10px] uppercase tracking-widest">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-white/40 text-[10px] uppercase tracking-widest">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-white/40 text-[10px] uppercase tracking-widest">
                          Phone <span className="normal-case tracking-normal text-white/20">(optional)</span>
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 (000) 000-0000" className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-white/40 text-[10px] uppercase tracking-widest">Subject</label>
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project type or topic" className={inputBase} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                    </div>

                    {/* Message + char counter */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <label className="font-sans text-white/40 text-[10px] uppercase tracking-widest">Message</label>
                        <span className="font-sans text-white/22" style={{ fontSize: "10px" }}>
                          {formData.message.length} / 1000
                        </span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={1000}
                        rows={5}
                        placeholder="Tell us about your project — timeline, goals, budget..."
                        className={inputBase}
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </div>

                    {/* Status messages */}
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="flex items-center gap-3 rounded-xl px-4 py-3.5 font-sans"
                        style={{ fontSize: "13px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", color: "#86efac" }}
                      >
                        <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.15)", fontSize: "11px" }}>✓</div>
                        Message sent! We'll get back to you within 24 hours.
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="flex items-center gap-3 rounded-xl px-4 py-3.5 font-sans"
                        style={{ fontSize: "13px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#fca5a5" }}
                      >
                        <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(239,68,68,0.15)", fontSize: "11px" }}>✗</div>
                        Something went wrong. Try again or reach us on WhatsApp.
                      </motion.div>
                    )}

                    {/* Footer: privacy + submit */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-1">
                      <p className="font-sans text-white/22 text-[10.5px] leading-relaxed sm:flex-grow">
                        🔒 Your information is kept private and never shared.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group shrink-0 inline-flex items-center justify-center gap-2.5 font-syne font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          fontSize: "14px",
                          padding: "13px 28px",
                          background: isSubmitting
                            ? "rgba(255,107,43,0.65)"
                            : "linear-gradient(135deg, #FF6B2B 0%, #e55a1c 100%)",
                          color: "#fff",
                          boxShadow: isSubmitting
                            ? "none"
                            : "0 4px 22px rgba(255,107,43,0.3), inset 0 1px 0 rgba(255,255,255,0.14)",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.boxShadow = "0 10px 36px rgba(255,107,43,0.45), inset 0 1px 0 rgba(255,255,255,0.14)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "0 4px 22px rgba(255,107,43,0.3), inset 0 1px 0 rgba(255,255,255,0.14)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};