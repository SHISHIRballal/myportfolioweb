"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import {
  FileCode,
  Atom,
  Code,
  Terminal,
  Server,
  Network,
  Database,
  Brain,
  Cpu,
  Table,
  Box,
  Cloud,
  GitBranch,
  Sparkles,
} from "lucide-react";

const skillIcons: Record<string, React.ComponentType<any>> = {
  JavaScript: FileCode,
  "React.js": Atom,
  "HTML/CSS": Code,
  Python: Terminal,
  "Node.js": Server,
  "Express.js": Network,
  MongoDB: Database,
  MySQL: Database,
  TensorFlow: Brain,
  PyTorch: Cpu,
  "Scikit-learn": Table,
  Pandas: Table,
  Docker: Box,
  AWS: Cloud,
  Git: GitBranch,
};

const categoryGradients: Record<string, string> = {
  frontend: "from-blue-500 to-cyan-400",
  backend: "from-green-500 to-emerald-400",
  tools: "from-purple-500 to-pink-400",
  ml: "from-orange-500 to-red-400",
  other: "from-indigo-500 to-purple-400",
};

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { skills } = portfolioData;

  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

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
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-6 capitalize">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {categorySkills.map((skill, index) => {
                    const IconComponent = skillIcons[skill.name] || Sparkles;
                    const gradient =
                      categoryGradients[skill.category] ||
                      categoryGradients.other;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={
                          inView ? { opacity: 1, scale: 1, rotate: 0 } : {}
                        }
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + index * 0.05,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        }}
                        className="relative p-6 rounded-2xl bg-gradient-to-br from-secondary/80 to-secondary/20 border border-secondary hover:border-primary/50 transition-all duration-300 cursor-pointer group overflow-hidden"
                      >
                        {/* Animated background gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />

                        {/* Icon container */}
                        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </motion.div>

                          <span className="font-semibold text-sm text-center group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        {/* Floating particles effect */}
                        <motion.div
                          className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/30"
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                        <motion.div
                          className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-accent/30"
                          animate={{
                            y: [0, -8, 0],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.2 + 0.5,
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Skills Overview with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-secondary/60 via-secondary/30 to-secondary/10 border border-secondary/50 relative overflow-hidden"
        >
          {/* Animated background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.span>
              Skills Overview
              <motion.span
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="w-6 h-6 text-accent" />
              </motion.span>
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => {
                const IconComponent = skillIcons[skill.name] || Sparkles;
                const gradient =
                  categoryGradients[skill.category] || categoryGradients.other;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                    }}
                    className="relative group"
                  >
                    <motion.span className="relative z-10 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-secondary/60 hover:border-primary/50 transition-all duration-300 text-sm font-medium flex items-center gap-2.5 shadow-lg group-hover:shadow-xl">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className={`p-1 rounded-md bg-gradient-to-br ${gradient}`}
                      >
                        <IconComponent className="w-3.5 h-3.5 text-white" />
                      </motion.div>
                      <span className="group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.span>

                    {/* Glow effect on hover */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Animated divider */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-primary"
                animate={{ width: [12, 24, 12] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-primary rotate-45"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="h-px w-12 bg-gradient-to-l from-transparent to-accent"
                animate={{ width: [12, 24, 12] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
