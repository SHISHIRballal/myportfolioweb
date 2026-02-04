"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  frontend: "from-[var(--primary)] to-[var(--accent)]",
  backend: "from-[var(--accent)] to-[var(--primary)]",
  tools: "from-[var(--primary)] to-[var(--secondary-foreground)]",
  ml: "from-[var(--accent)] to-[var(--primary)]",
  other: "from-[var(--primary)] to-[var(--accent)]",
};

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { skills } = portfolioData;

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + index * 0.05,
                    }}
                    className="p-6 rounded-lg bg-secondary/50 border border-secondary hover:border-primary transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-sm text-foreground/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${categoryColors[skill.category] || categoryColors.other} rounded-full`}
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + index * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Skills Overview
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.03,
                  type: "spring",
                  stiffness: 200,
                }}
                className="px-4 py-2 rounded-full bg-background border border-secondary hover:border-primary hover:bg-primary/10 transition-all duration-300 text-sm font-medium"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
