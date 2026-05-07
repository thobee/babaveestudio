import { motion } from "framer-motion";

export const TechStack = () => {
  const tech = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  ];

  return (
    <section className="py-24 bg-white relative z-10 border-t border-gray-100 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full"
        >
          <h2
            className="font-sans font-bold text-[#0A1628] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: "1.1" }}
          >
            Powered by modern tech.
          </h2>

          <p className="font-sans text-gray-500 text-[16px] md:text-[18px] max-w-2xl leading-relaxed mb-20">
            We leverage industry-leading frameworks and platforms to build fast,
            scalable, and beautiful digital experiences.
          </p>
        </motion.div>

        {/* Horizontal Logo Flow */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-16 w-full">
          {tech.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              key={index}
              className="group relative flex flex-col items-center justify-center gap-3 shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={item.icon}
                alt={`${item.name} logo`}
                className="w-12 h-12 md:w-14 md:h-14 relative z-10 transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-md "
              />
              <span className="font-sans font-medium text-[13px] text-gray-400 opacity-0 translate-y-2 group-hover:opacity-100  absolute -bottom-8">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
