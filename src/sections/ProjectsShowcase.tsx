'use client';
import { useState } from 'react';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import cropintelPage from "@/assets/images/cropintel.png";
import ai4impactPage from "@/assets/images/ai4impact.png";
import smartcoopPage from "@/assets/images/smart.png";
import sbcltPage from "@/assets/images/sbclt.png";
import kinyarwandaPage from "@/assets/images/kinyarwanda.png";
import nalyticPage from "@/assets/images/nalytic.png";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  image: any;
  status: 'completed' | 'in-progress' | 'planned';
  year: string;
  link?: string;
  linkText?: string;
  github?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Sparse-Bayesian Cross-Lingual Transformer Project',
    description: 'Advanced NLP research for cross-lingual understanding',
    longDescription: 'A research project focused on developing sparse Bayesian cross-lingual transformer models for improved language understanding across African languages.',
    category: 'AI/ML',
    technologies: ['Python', 'PyTorch', 'Transformers', 'NLP', 'Bayesian Methods'],
    image: sbcltPage,
    status: 'in-progress',
    year: 'June 2025',
    link: '#',
    github: '#',
    features: [
      'Cross-lingual model development',
      'Sparse Bayesian optimization',
      'African language support',
      'Research paper implementation'
    ]
  },
  {
    id: '2',
    title: 'Nalytic',
    description: 'Data analytics and business intelligence platform',
    longDescription: 'A comprehensive analytics platform that provides businesses with powerful insights through advanced data visualization and machine learning.',
    category: 'AI/ML',
    technologies: ['Python', 'React', 'D3.js', 'Machine Learning', 'AWS'],
    image: nalyticPage,
    status: 'completed',
    year: 'January 2025',
    link: '#',
    github: '#',
    features: [
      'Real-time data visualization',
      'Predictive analytics',
      'Custom dashboard creation',
      'Automated reporting system'
    ]
  },
  {
    id: '3',
    title: 'CropIntel',
    description: 'AI-powered agricultural advisory system for African farmers',
    longDescription: 'A comprehensive AI platform that helps farmers make data-driven decisions about crop management, pest control, and resource optimization.',
    category: 'AI/ML',
    technologies: ['Python', 'Machine Learning', 'Computer Vision', 'React', 'Node.js', 'IoT'],
    image: cropintelPage,
    status: 'completed',
    year: '2024',
    link: '#',
    github: '#',
    features: [
      'Crop recommendation algorithms using historical weather data',
      'Pest and disease detection using computer vision',
      'Weather forecasting for agricultural planning',
      'Mobile app for farmers to access insights'
    ]
  },
  {
    id: '4',
    title: 'Kinyarwanda E-Learning Platform',
    description: 'Educational platform for Kinyarwanda language learning',
    longDescription: 'An innovative e-learning platform designed to teach and preserve the Kinyarwanda language through interactive digital experiences.',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Audio Processing', 'Gamification'],
    image: kinyarwandaPage,
    status: 'completed',
    year: '2024',
    link: '#',
    github: '#',
    features: [
      'Interactive language lessons',
      'Audio pronunciation guides',
      'Progress tracking system',
      'Cultural content integration'
    ]
  },
  {
    id: '5',
    title: 'AI4Impact',
    description: 'AI solutions for social impact across Africa',
    longDescription: 'A platform that develops and deploys AI solutions to address critical challenges in healthcare, education, and economic development.',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'React Native', 'AWS', 'Docker'],
    image: ai4impactPage,
    status: 'in-progress',
    year: '2023',
    link: '#',
    github: '#',
    features: [
      'Healthcare diagnostic tools for rural areas',
      'Educational content personalization',
      'Economic forecasting models',
      'Community impact tracking'
    ]
  },
  {
    id: '6',
    title: 'Smart Poultry Farming System',
    description: 'IoT-based monitoring and automation for poultry farms',
    longDescription: 'An intelligent system that monitors environmental conditions, automates feeding, and provides health insights for poultry farming operations.',
    category: 'IoT',
    technologies: ['IoT', 'Arduino', 'Python', 'React', 'MongoDB', 'Cloud Computing'],
    image: smartcoopPage,
    status: 'completed',
    year: '2023',
    link: '#',
    linkText: 'News Article',
    github: '#',
    features: [
      'Real-time environmental monitoring',
      'Automated feeding and watering systems',
      'Health monitoring and alerting',
      'Data analytics dashboard'
    ]
  }
];

const categories = ['All', 'AI/ML', 'IoT', 'Web Development'];

export const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'planned': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-400/10 border-green-400/20';
      case 'in-progress': return 'bg-yellow-400/10 border-yellow-400/20';
      case 'planned': return 'bg-blue-400/10 border-blue-400/20';
      default: return 'bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Showcasing innovative solutions that leverage AI and technology for African development"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 mt-12">
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-emerald-300 text-gray-900'
                    : 'bg-gray-800 text-white/70 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-lg"
                />

              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-sm text-white/60">{project.year}</span>
                </div>
                
                <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800 text-emerald-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-white/60 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{project.linkText || 'Live Demo'}</span>
                      <ArrowUpRightIcon className="size-3" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>GitHub</span>
                      <ArrowUpRightIcon className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">No projects found with the selected filters.</p>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <Card className="p-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                      </div>
                      <p className="text-white/60">{selectedProject.year}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                      <p className="text-white/70">{selectedProject.longDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-800 text-emerald-300 text-sm rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Key Features</h3>
                      <ul className="space-y-1">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-white/70 flex items-start gap-2">
                            <span className="text-emerald-300 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 pt-4">
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-emerald-300 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-emerald-200 transition-colors"
                        >
                          <span>{selectedProject.linkText ? `View ${selectedProject.linkText}` : 'View Live Demo'}</span>
                          <ArrowUpRightIcon className="size-4" />
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-white/15 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
                        >
                          <span>View Code</span>
                          <ArrowUpRightIcon className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 