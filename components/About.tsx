"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, MapPin, Mail, Phone, Award } from "lucide-react";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { personalInfo, education, certifications } = portfolioData;

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {personalInfo.name}
            </h3>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-lg bg-background border border-secondary hover:border-primary transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className="text-foreground/80 mb-2">{edu.field}</p>
                    <p className="text-primary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {edu.duration} • {edu.location}
                    </p>
                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-foreground/70 flex items-center"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {certifications && certifications.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="w-6 h-6 text-primary mr-2" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                      className="flex items-start text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>{cert.name}</strong> — {cert.issuer}
                        {cert.year && ` (${cert.year})`}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
