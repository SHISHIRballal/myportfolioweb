export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "ml" | "other";
  icon?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  achievements?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  avatar?: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  certifications?: Certification[];
}
