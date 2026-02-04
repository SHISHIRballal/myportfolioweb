"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-foreground/60 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            {personalInfo.socialLinks.map((link) => {
              const Icon = iconMap[link.icon.toLowerCase()] || Github;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label={link.platform}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/50">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
