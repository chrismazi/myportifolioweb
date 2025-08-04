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
    title: "British Airways",
    position: "Data Science Job Simulation on Forage",
    location: "Remote",
    duration: "March - April 2025",
    description: "Completed a comprehensive data science simulation project focusing on customer feedback analysis and predictive modeling.",
    technologies: ["Python", "Beautiful Soup", "Pandas", "NumPy", "Scikit-learn", "Data Scraping"],
    achievements: [
      "Processed over 5000+ customer feedback records with 20% increase in data aggregation efficiency",
      "Used Pandas and NumPy to clean and structure datasets, reducing data inconsistencies by 25%",
      "Developed predictive models with Scikit-learn improving prediction accuracy by 15%",
      "Effectively identified key factors influencing customer buying behavior"
    ]
  },
  {
    title: "National Institute of Statistics Rwanda",
    position: "Data Scientist Academic Intern",
    location: "Kigali, RW",
    duration: "Nov 2024 - Jan 2025",
    description: "Built data pipelines and conducted statistical analysis for government reports and policy decisions.",
    technologies: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "ETL"],
    achievements: [
      "Built data pipelines to automate data collection and processing",
      "Used SQL and Python to manipulate, analyze, and visualize complex datasets",
      "Analyzed large datasets to identify key trends and patterns",
      "Assisted in the development of statistical reports for government use"
    ]
  },
  {
    title: "Rwanda Social Security Board",
    position: "Research Intern",
    location: "Kigali, RW",
    duration: "Jun - Aug 2024",
    description: "Developed ETL pipelines and forecasting models for pension data analysis and trend prediction.",
    technologies: ["Python", "ETL", "ARIMA", "Statsmodels", "Streamlit", "Plotly", "Seaborn"],
    achievements: [
      "Built Python ETL pipelines consolidating 10,000+ pension records, cutting reporting time by 40%",
      "Developed ARIMA-based forecasting model predicting contribution trends with 85% accuracy",
      "Automated dashboards for real-time insights, adopted by 3 departmental teams",
      "Created comprehensive data visualization solutions using Streamlit, Plotly, and Seaborn"
    ]
  },
  {
    title: "National Industrial Research & Development Agency (NIRDA)",
    position: "Project Lead",
    location: "Kigali, RW",
    duration: "March - Aug 2023",
    description: "Led IoT Poultry project development and secured funding through stakeholder presentations.",
    technologies: ["IoT", "C++", "Sensors", "Project Management", "Stakeholder Communication"],
    achievements: [
      "Developed IoT Poultry project integrating 10+ sensors with C++ backend achieving 20% efficiency gain",
      "Pitched solution to 50+ stakeholders, securing $7,000 in prototype funding",
      "Led cross-functional team in IoT system development and deployment",
      "Demonstrated practical applications of IoT technology in agricultural sector"
    ]
  },
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