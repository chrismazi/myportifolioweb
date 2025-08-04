'use client';
import { useState } from 'react';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'AI Consulting',
    description: 'I help companies of all sizes navigate complex AI problems including requirements gathering, model development, and implementation strategies.',
    icon: '🤖'
  },
  {
    title: 'Calling',
    description: 'I\'m passionate about collaborating on projects that reflect values of service, integrity, and impact. I believe in being young and noble, walking in faith, building with purpose, and making the world a little better along the way.',
    icon: '🙏'
  },
  {
    title: 'Research',
    description: 'I conduct high-quality research to gain deeper insights on AI and agricultural technology issues, using modern data-gathering and analysis techniques.',
    icon: '🔬'
  },
  {
    title: 'Training',
    description: 'I have helped organizations improve their teams\' competencies on various AI and software engineering topics.',
    icon: '📚'
  }
];

type ContactPath = 'General Enquiries' | 'AI Consulting' | 'Faith & Purpose-Aligned Projects' | 'Research Collaboration';

export const ContactContent = () => {
  const [selectedPath, setSelectedPath] = useState<ContactPath>('General Enquiries');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    topic: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { path: selectedPath, ...formData });
    alert('Thank you for your message! I\'ll get back to you within 24-48 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      topic: '',
      budget: '',
      timeline: ''
    });
  };

  const renderFormFields = () => {
    switch (selectedPath) {
      case 'General Enquiries':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Message *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                placeholder="Tell me about your inquiry..."
              />
            </div>
          </>
        );

      case 'AI Consulting':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="Your company"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Project Details *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                placeholder="Describe your AI project requirements..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Budget Range
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="e.g., $5,000 - $10,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Timeline
                </label>
                <input
                  type="text"
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="e.g., 3 months"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                placeholder="your.email@example.com"
              />
            </div>
          </>
        );

      case 'Faith & Purpose-Aligned Projects':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="Your organization"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Project Type *
              </label>
              <select
                required
                value={formData.topic}
                onChange={(e) => handleInputChange('topic', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-300"
              >
                <option value="">Select project type</option>
                <option value="community-service">Community Service</option>
                <option value="faith-based">Faith-Based Initiative</option>
                <option value="social-impact">Social Impact</option>
                <option value="youth-empowerment">Youth Empowerment</option>
                <option value="education">Education & Mentorship</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Project Details *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                placeholder="Tell me about your project, its mission, and how we can collaborate..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                placeholder="your.email@example.com"
              />
            </div>
          </>
        );

      case 'Research Collaboration':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Institution *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                  placeholder="Your institution"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Research Area *
              </label>
              <select
                required
                value={formData.topic}
                onChange={(e) => handleInputChange('topic', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-300"
              >
                <option value="">Select research area</option>
                <option value="ai-agriculture">AI in Agriculture</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="computer-vision">Computer Vision</option>
                <option value="nlp">Natural Language Processing</option>
                <option value="iot">Internet of Things</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Research Proposal *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                placeholder="Describe your research proposal and collaboration goals..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300"
                placeholder="your.email@example.com"
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/5">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📧</span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Let&apos;s do some amazing stuff together!
                </h3>
              </div>
              <p className="text-white/60 mb-6">
                Feel free to select from any of the options below to figure out how best I can be of value to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    What can I help you with? *
                  </label>
                  <select
                    required
                    value={selectedPath}
                    onChange={(e) => setSelectedPath(e.target.value as ContactPath)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-300"
                  >
                    <option value="General Enquiries">General Enquiries</option>
                    <option value="AI Consulting">AI Consulting</option>
                    <option value="Faith & Purpose-Aligned Projects">Faith & Purpose-Aligned Projects</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                  </select>
                </div>

                {renderFormFields()}

                <button
                  type="submit"
                  className="w-full bg-emerald-300 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-emerald-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="w-full lg:w-3/5">
            <SectionHeader
              eyebrow="Services"
              title="How I Can Help You"
              description="Explore the different ways we can work together to achieve your goals."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Mentorship Section */}
        <div className="mt-20 text-center">
          <Card className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Need some mentorship?
            </h3>
            <p className="text-white/60 mb-6">
              I have dedicated some time from my busy schedule for technical mentorship, mostly in the form of pair programming and AI guidance.
            </p>
            <a
              href="mailto:chrismazimpaka7@gmail.com"
              className="inline-flex items-center gap-2 bg-emerald-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-200 transition-colors"
            >
              Book a 30 Minute 1:1 With Me (It&apos;s Free :)
              <ArrowUpRightIcon className="size-4" />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}; 