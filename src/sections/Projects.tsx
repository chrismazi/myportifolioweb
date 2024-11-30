import cropintelPage from "@/assets/images/cropintel.png";
import ai4impactPage from "@/assets/images/ai4impact.png";
import smartcoopPage from "@/assets/images/smart.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "CropIntel",
    year: "2024",
    title: "AI-Powered Agricultural  advisory system (In progress)",
    results: [
      { title: "Crop Recomendation" },
      { title: "Weather Forecasting" },
      { title: "Pest Infestaion and Plant Disease detection" },
    ],
    link: "https://cropintel.vercel.app/",
    image: cropintelPage,
  },
  {
    company: "AI4Impact",
    year: "2023",
    title: "Your Gateway to Real-World AI Impact",
    results: [
      { title: "Learn AI through Real-World Projects" },
      { title: "Innovate Solutions for Real Challenges" },
      { title: "Collaborate to Make a Difference" },
    ],
    link: "https://ai4impact.vercel.app/",
    image: ai4impactPage,
  },
  {
    company: "Smart Poultry Farming system",
    year: "2022",
    title: "IoT Sensors for Poultry Health (Read An article)",
    results: [
      { title: "Automated Control and Alerts" },
      { title: "Environmental Monitoring " },
      { title: "Health Monitoring (Activity & Motion Sensors)" },
    ],
    link: "https://iribanews.com/nirda-awards-best-innovators-in-smart-agro-processing-hackathon/",
    image: smartcoopPage,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader 
      eyebrow="Real World Results " 
      title=" Featured Projects" 
      description="See how I transformed concepts into engaging digital experiences."/>
      
      
        
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
        <Card
          key= {project.title} className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
          style={{
            top: `calc(64px + ${projectIndex * 40}px`
          }}
          >
            
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
            </div>
            
            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map(results => (
                <li className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckCircleIcon  className="size-5 md:size-6"/>
                  <span>{results.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link}>
            <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
              <span>Visit live site</span>
              <ArrowUpRightIcon className='size-4'/>
              </button>
            </a>
            </div>
            <div className="relative">
            <Image 
            src={project.image} 
            alt={project.title} 
            className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
            />
            </div>
            </div>
            </Card>
        ) )}
      </div>
    </div>
  </section>
  );
};
