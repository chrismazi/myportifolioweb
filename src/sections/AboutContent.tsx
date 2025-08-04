'use client';
import { useState } from 'react';
import { Card } from "@/components/Card";
import { workExperience } from "@/data/work-experience";
import prince from '@/assets/images/prince.png';
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

export const AboutContent = () => {
  const [activeTab, setActiveTab] = useState('pitch');

  const tabs = [
    { id: 'pitch', label: 'Elevator Pitch' },
    { id: 'brief', label: 'Brief Profile' },
    { id: 'full', label: 'Full Bio' }
  ];

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-3/5">
            <Card className="p-8">
              {/* Tab Navigation */}
              <div className="flex gap-2 mb-8 bg-gray-800 rounded-xl p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-emerald-300 text-gray-900'
                        : 'text-white/70 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === 'pitch' && (
                  <div className="space-y-6">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-900 font-bold">PC</span>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Prince Chris Mazimpaka</p>
                          <p className="text-sm text-white/60">@princechris</p>
                        </div>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        Hi 👋 I&apos;m Chris a believer in Christ, an AI researcher and developer passionate about solving real-world challenges across Africa. 
                        I build intelligent systems that help people, from farmers needing real-time advice to youth learning through tech. My mission is simple: serve with <span className="text-emerald-300">purpose, innovate with faith,  </span> 
                        and leave the world better than <span className="text-emerald-300">I found it</span> by 🌙
                      </p>
                      <p className="text-white/80 leading-relaxed mt-4">
                        I love to <span className="text-emerald-300">#buildinpublic</span> and share my journey in AI, 
                       and technology. Let&apos;s <span className="text-emerald-300">#connect</span> if you&apos;re interested in 
                        <span className="text-emerald-300"> #AI</span>, <span className="text-emerald-300"> #tech</span>, 
                        <span className="text-emerald-300"> #innovation</span>, and <span className="text-emerald-300">#Africa</span>
                      </p>
                      <div className="flex gap-2 mt-4">
                        <span className="text-emerald-300">#AIforAfrica</span>
                        <span className="text-emerald-300">#Tech</span>
                        <span className="text-emerald-300">#Innovation</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'brief' && (
                  <div className="space-y-6">
                    <div className="relative h-64 rounded-lg overflow-hidden bg-gray-700">
                      <Image
                        src={prince}
                        alt="Prince Chris Mazimpaka"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4 text-white/80 leading-relaxed">
                      <p>
                        A passionate AI researcher and developer with expertise in agricultural technology, 
                        machine learning, and full-stack development. I focus on creating practical AI solutions 
                        that address real challenges facing African communities.
                      </p>
                      <p>
                        I hold a strong foundation in mathematics and statistics, with research experience in 
                        Large Language Models and their applications. My work spans from academic research to 
                        practical implementations in agriculture and education.
                      </p>
                      <p>
                        <Link href="/blog" className="text-emerald-300 hover:text-emerald-200 underline">
                          Follow my blog
                        </Link>{' '}
                        where I write about AI applications in Africa, or reach out if you need someone to 
                        discuss AI, agricultural technology, or innovation in the African context.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'full' && (
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-1/3">
                        <div className="relative h-64 rounded-lg overflow-hidden bg-gray-700">
                          <Image
                            src={prince}
                            alt="Prince Chris Mazimpaka"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-2/3 space-y-4 text-white/80 leading-relaxed">
                        <p>
                          Prince Chris is a dedicated AI researcher and developer with a passion for leveraging 
                          technology to solve real-world challenges across Africa. With expertise in machine learning, 
                          agricultural technology, and full-stack development, he focuses on creating practical 
                          solutions that make a difference.
                        </p>
                        <p>
                          He is currently leading the development of AI-powered agricultural advisory systems at{' '}
                          <a href="https://cropintel.vercel.app/" className="text-emerald-300 hover:text-emerald-200 underline">
                            CropIntel
                          </a>
                          , where he helps farmers improve crop yields and reduce losses through intelligent 
                          recommendations and predictive analytics.
                        </p>
                        <p>
                          As the founder of{' '}
                          <a href="https://ai4impact.vercel.app/" className="text-emerald-300 hover:text-emerald-200 underline">
                            AI4Impact
                          </a>
                          , he creates platforms that connect AI enthusiasts with real-world problems, 
                          fostering innovation and practical AI applications across the continent.
                        </p>
                        <p>
                          His research background includes work on mathematical and statistical foundations of 
                          Large Language Models at the University of Rwanda, where he contributed to academic 
                          understanding of AI systems and their applications.
                        </p>
                        <p>
                          Prince Chris has won recognition for his innovative work, including first place in 
                          the NIRDA Smart Agro-Processing Hackathon for his IoT-based smart poultry farming system, 
                          demonstrating the practical applications of AI in agriculture.
                        </p>
                        <p>
                          He is committed to building in public and sharing knowledge, regularly writing about 
                          AI applications in Africa and mentoring the next generation of African technologists.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-300 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-200 transition-colors"
                >
                  Get in Touch
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </div>
            </Card>
          </div>

          {/* Work Experience Sidebar */}
          <div className="w-full lg:w-2/5">
            <Card className="p-6">
              <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                <span>💼</span>
                Professional History
              </h3>
              <div className="space-y-6">
                {workExperience.map((experience, index) => (
                  <div key={index} className="border-l-2 border-emerald-300 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white text-lg">{experience.title}</h4>
                      <span className="text-sm text-white/50">{experience.duration}</span>
                    </div>
                    <p className="text-emerald-300 font-medium mb-1">{experience.position}</p>
                    <p className="text-white/60 text-sm mb-2">{experience.location}</p>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {experience.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-white/70 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  View LinkedIn Profile
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}; 