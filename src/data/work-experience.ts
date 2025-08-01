export interface WorkExperience {
  title: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const workExperience: WorkExperience[] = [
  {
    title: "CropIntel",
    position: "AI Research Engineer & Founder",
    location: "Rwanda",
    duration: "2024 - Present",
    description: "Leading the development of AI-powered agricultural advisory systems to help African farmers improve crop yields and reduce losses.",
    technologies: ["Python", "Machine Learning", "Computer Vision", "IoT", "React", "Node.js"],
    achievements: [
      "Developing crop recommendation algorithms using historical weather and soil data",
      "Implementing pest and disease detection using computer vision",
      "Building weather forecasting models for agricultural planning",
      "Creating mobile applications for farmers to access AI insights"
    ]
  },
  {
    title: "AI4Impact",
    position: "Founder & Lead Developer",
    location: "Rwanda",
    duration: "2023 - Present",
    description: "Creating a platform that connects AI enthusiasts with real-world problems, fostering innovation and practical AI applications across Africa.",
    technologies: ["Next.js", "TypeScript", "AI/ML", "Python", "MongoDB", "AWS"],
    achievements: [
      "Built a comprehensive learning platform for AI education",
      "Connected over 500+ students with real-world AI projects",
      "Facilitated collaboration between academia and industry",
      "Organized hackathons and workshops across multiple African countries"
    ]
  },
  {
    title: "Smart Poultry Farming System",
    position: "IoT & AI Engineer",
    location: "Rwanda",
    duration: "2022",
    description: "Developed an IoT-based smart poultry farming system that won the NIRDA Smart Agro-Processing Hackathon, demonstrating practical applications of AI in agriculture.",
    technologies: ["IoT Sensors", "Arduino", "Python", "Machine Learning", "Data Analytics"],
    achievements: [
      "Designed and implemented environmental monitoring sensors",
      "Created health monitoring systems for poultry",
      "Developed automated control and alert systems",
      "Won first place in NIRDA Smart Agro-Processing Hackathon"
    ]
  },
  {
    title: "University of Rwanda",
    position: "Research Assistant",
    location: "Rwanda",
    duration: "2022 - 2023",
    description: "Conducted research on mathematical and statistical foundations of Large Language Models, contributing to academic understanding of AI systems.",
    technologies: ["Python", "Mathematics", "Statistics", "Machine Learning", "Research"],
    achievements: [
      "Published research on mathematical foundations of LLMs",
      "Developed statistical models for textual data analysis",
      "Collaborated with faculty on AI research projects",
      "Presented findings at academic conferences"
    ]
  },
  {
    title: "ICT Innovation Center",
    position: "Software Developer",
    location: "Rwanda",
    duration: "2021 - 2022",
    description: "Worked on various software development projects, gaining experience in full-stack development and collaborative software engineering.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
    achievements: [
      "Developed multiple web applications for local businesses",
      "Mentored junior developers and students",
      "Participated in innovation challenges and hackathons",
      "Contributed to open-source projects"
    ]
  }
]; 