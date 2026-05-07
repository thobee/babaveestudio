import { motion } from "framer-motion";

export const Blog = () => {
  const articles = [
    {
      category: "SEO",
      title: "Why Your Competitor's Website Is Ranking Higher Than Yours",
      description:
        "It's not luck — it's strategy. We break down the exact SEO mistakes killing your visibility on Google and what you can do to fix them today.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Babavee",
      date: "Oct 12, 2026",
      readTime: "6 min read",
      link: "#",
    },
    {
      category: "Web Design",
      title:
        "The 5-Second Rule: Why First Impressions on Your Website Cost You Sales",
      description:
        "Visitors decide to stay or leave in under 5 seconds. Here's how smart UI/UX design keeps them on your page and turns clicks into clients.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Babavee",
      date: "Oct 08, 2026",
      readTime: "5 min read",
      link: "#",
    },
    {
      category: "Nigeria",
      title:
        "From Aba to Abuja: How Nigerian SMEs Are Winning Online With the Right Website",
      description:
        "Local businesses across Nigeria are finally taking their digital presence seriously — and the results are speaking for themselves.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Babavee",
      date: "Oct 03, 2026",
      readTime: "7 min read",
      link: "#",
    },
  ];

  return (
    <section
      id="blog"
      className="py-24 relative z-10 bg-[#F8F9FB] border-t border-gray-100"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-brand-orange font-semibold">
              Insights
            </span>
            <h2
              className="font-syne font-extrabold text-[#0A1628] tracking-tight mt-3"
              style={{
                fontSize: "clamp(1.9rem, 3.8vw, 2.8rem)",
                lineHeight: 1.1,
              }}
            >
              News & Articles
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-brand-orange hover:gap-3 transition-all duration-300 shrink-0"
          >
            View all articles
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M12 7L8 3M12 7L8 11"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, i) => (
            <motion.a
              href={article.link}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-brand-orange/25 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer min-h-[520px]"
            >
              {/* Image */}
              <div className="w-full h-[280px] overflow-hidden relative shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#0A1628] font-mono text-[9.5px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 rounded-full shadow-sm border border-gray-100">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="font-syne font-bold text-[#0A1628] text-[18px] leading-[1.4] mb-2.5 group-hover:text-brand-orange transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="font-sans text-gray-400 text-[14px] leading-relaxed line-clamp-2 mb-5 flex-grow">
                  {article.description}
                </p>

                {/* Footer meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 font-sans text-gray-400">
                    <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-[10px] shrink-0">
                      B
                    </div>
                    <span className="font-semibold text-[#0A1628] text-[12px]">
                      {article.author}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="text-[12px]">{article.date}</span>
                  </div>
                  <span className="font-mono text-[10px] text-gray-300">
                    {article.readTime}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <button className="font-sans text-[13px] font-semibold text-[#0A1628] border border-gray-200 bg-white px-8 py-3 rounded-full shadow-sm hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:shadow-[0_6px_20px_rgba(249,115,22,0.3)] transition-all duration-300">
            Load More
          </button>
        </motion.div>
      </div>
    </section>
  );
};
