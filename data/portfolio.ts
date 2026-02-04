import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "SHISHIR KRISHNA S BALLALA",
    title: "AI & Data Science Student | Full-Stack Developer",
    bio: "Passionate about building intelligent applications at the intersection of AI and web development. Currently pursuing BE in Artificial Intelligence and Data Science, with hands-on experience in machine learning, MERN stack development, and cloud technologies.",
    location: "Mangalore",
    email: "shishirballal1305@gmail.com",
    phone: "+91 9380753201",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/SHISHIRballal",
        icon: "github",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/shishir-ballal",
        icon: "linkedin",
      },
    ],
  },
  skills: [
    // Frontend
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "React.js", level: 85, category: "frontend" },
    { name: "HTML/CSS", level: 88, category: "frontend" },
    // Backend
    { name: "Python", level: 88, category: "backend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 80, category: "backend" },
    // Database
    { name: "MongoDB", level: 78, category: "backend" },
    { name: "MySQL", level: 75, category: "backend" },
    // ML
    { name: "TensorFlow", level: 82, category: "ml" },
    { name: "PyTorch", level: 75, category: "ml" },
    { name: "Scikit-learn", level: 85, category: "ml" },
    { name: "Pandas", level: 88, category: "ml" },
    // Tools
    { name: "Docker", level: 70, category: "tools" },
    { name: "AWS", level: 65, category: "tools" },
    { name: "Git", level: 85, category: "tools" },
  ],
  workExperience: [],
  education: [
    {
      institution: "AJ Institute of Engineering and Technology, VTU",
      degree: "BE (Bachelor of Engineering)",
      field: "Artificial Intelligence and Data Science",
      duration: "Ongoing",
      location: "Mangalore",
    },
    {
      institution: "Sharadha PU College",
      degree: "Associate's Degree",
      field: "Science",
      duration: "2023",
      location: "Mangalore",
    },
  ],
  certifications: [
    {
      name: "Python Concurrent Programming: Multiprocessing in Python",
      issuer: "Infosys",
    },
    {
      name: "Joy of Computing Using Python",
      issuer: "NPTEL",
    },
    {
      name: "21 Days Masterclass on STM32 - Nucleo 64",
      issuer: "Pantech e-learning",
    },
  ],
  projects: [
    {
      id: "plant-disease",
      name: "Plant Disease Detection System",
      description: "End-to-end application to detect plant diseases from leaf images using CNN",
      longDescription: "Engineered an end-to-end application to detect plant diseases from leaf images using a Convolutional Neural Network (CNN). Developed a Python/Flask backend to serve the TensorFlow/Keras model and built an HTML/CSS/JS interface for users to upload images and receive real-time predictions.",
      technologies: ["Python", "Flask", "TensorFlow", "Keras", "CNN", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/SHISHIRballal/Plant-Disease-Detection",
      featured: true,
      category: "Machine Learning",
    },
    {
      id: "earthquake-prediction",
      name: "Earthquake Prediction Using ML",
      description: "Neural network regression model to predict earthquake magnitude and depth",
      longDescription: "Built a neural-network regression model to predict earthquake magnitude and depth from historical seismic data. Implemented data preprocessing, feature scaling, and hyperparameter tuning using SciKeras and GridSearchCV. Evaluated performance with MSE/MAE and visualized results; saved the trained model for deployment.",
      technologies: ["Python", "SciKeras", "Scikit-learn", "GridSearchCV", "Neural Networks"],
      githubUrl: "https://github.com/SHISHIRballal/Earthquake-Prediction-ML",
      featured: true,
      category: "Machine Learning",
    },
    {
      id: "connetify",
      name: "Connetify",
      description: "Feature-rich social media application built with MERN stack",
      longDescription: "Developed a feature-rich social media application using the MERN stack, with Firebase for authentication and real-time database services. Engineered key functionalities including secure user login/signup, a live-updating tweet feed, and the ability for users to create, like, and delete posts. Styled with Tailwind CSS for a modern, responsive UI.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/SHISHIRballal/Connetify",
      featured: true,
      category: "Full-Stack (MERN)",
    },
  ],
};
