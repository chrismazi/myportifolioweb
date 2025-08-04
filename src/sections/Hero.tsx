'use client';
import { useState, useEffect } from 'react';
import prince from "@/assets/images/prince.png";
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { WelcomeNotification } from "@/components/WelcomeNotification";

// Import story images
import chris from "@/assets/images/chris.jpg";
import calling from "@/assets/images/jesuscalling.jpg";
import smartcoopPage from "@/assets/images/smart.png";
import sbcltPage from "@/assets/images/sbclt.png";
import kinyarwandaPage from "@/assets/images/kinyarwanda.png";
import nalyticPage from "@/assets/images/nalytic.png";

// Story data
const stories = [
  {
    id: 1,
    image: chris,
    title: "Final Year Thesis Defense",
    description: "Mathematical and Statistical Foundations of transformer architectures in low-resource languages"
  },
  {
    id: 2,
    image: calling,
    title: "Book Recommendation: Jesus Calling by Sarah Young",
    description: "A deeply personal daily devotional that feels like Jesus speaking directly to you. Each message offers peace, encouragement, and quiet strength. This book has helped me slow down, listen, and reconnect with God in life's busyness."
  },
  
  
  
  
];

export const HeroSection = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showStories, setShowStories] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    // Show notification after 3 seconds to let the page load and user settle
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent body scrolling when stories are open
  useEffect(() => {
    if (showStories) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showStories]);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleStoryClick = () => {
    setShowStories(true);
    setCurrentStoryIndex(0);
  };

  const handleCloseStories = () => {
    setShowStories(false);
  };

  const handleNextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return( 
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
    <div 
    className="absolute  inset-0 -z-30 opacity-5" 
    style={{
      backgroundImage: `url(${grainImage.src})`
      }}>
    </div>

    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    {/*  orbitDuration?: string;
  shouldOrbit?: boolean;
  spinDuration?:  string;
  shouldSpin?: boolean;
  */}
    <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s">
      <SparkleIcon className="size-8 text-emerald-300/20" />
    </HeroOrbit> 
    <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s">
      <SparkleIcon className="size-5 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="5s">
      <div className="size-2 rounded-full bg-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s">
      <SparkleIcon className="size-10 text-emerald-300/20" />
    </HeroOrbit>
     <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s">
      <StarIcon className="size-12 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
      <StarIcon className="size-8 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
      <div className="size-2 rounded-full bg-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s">
      <SparkleIcon className="size-14 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s"shouldSpin spinDuration="8s">
      <div className="size-3 rounded-full bg-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="8s">
      <StarIcon className='size-28 text-emerald-300'/>
    </HeroOrbit>
   
    
    
    
    
    
    
    
    
    </div>

    <div className="container">
      <div className="flex flex-col items-center">
        {/* Profile picture with Instagram-style story ring */}
        <div className="relative mb-4">
          <div className="relative w-[108px] h-[108px] story-ring-container cursor-pointer" onClick={handleStoryClick}>
            {/* Story ring - outer gradient border that rotates */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-purple-500 to-pink-500 p-1 animate-spin-slow">
              {/* Inner background - counter-rotates to keep profile picture stable */}
              <div className="w-full h-full rounded-full bg-gray-950 p-1 animate-spin-slow-reverse">
                {/* Profile picture - stays stable */}
                <Image
                  src={prince} 
                  className="w-full h-full rounded-full object-cover" 
                  alt="Prince Chris Mazimpaka" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm  font-medium">Prince Chris Mazimpaka</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Intelligent Solutions for Tomorrow</h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">
        I Transform Challenges into AI-Powered, High-Performance Web Solutions.
      </p>
      </div>
      <div className="flex flex-col  md:flex-row justify-center items-center mt-8 gap-4">
         <a href="#projects" className="inline-flex items-center gap-2 border border-white/15 px-5 h-9 rounded-xl hover:bg-white/10 transition-colors">
          <span className="font-semibold">Explore my work</span>
          <ArrowDown className="size-4" />
         </a>
         <a href="/blog" className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-9 px-5 rounded-xl hover:bg-white/90 transition-colors">
          <span>🤖</span>
          <span className="font-semibold">Read Blog</span>
         </a>
         <a href="/about" className="inline-flex items-center gap-2 border border-white/15 px-5 h-9 rounded-xl hover:bg-white/10 transition-colors">
          <span>👨‍💻</span>
          <span className="font-semibold">About Me</span>
         </a>
         <a href="/contact" className="inline-flex items-center gap-2 border border-white/15 px-5 h-9 rounded-xl hover:bg-white/10 transition-colors">
          <span>✌️</span>
          <span className="font-semibold">Let&apos;s connect</span>
         </a>
      </div>
    </div>

    {/* Instagram-style Story Viewer */}
    {showStories && (
      <>
        {/* Full screen black overlay to block all background content */}
        <div 
          className="fixed inset-0 bg-black z-50" 
          style={{ top: '80px', height: 'calc(100vh - 80px)' }}
        />
        
        {/* Story viewer content */}
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4" 
          style={{ top: '80px', height: 'calc(100vh - 80px)' }}
        >
          <div className="relative w-full h-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-black rounded-lg overflow-hidden">
            {/* Story Image */}
            <div className="relative w-full h-full">
              <Image
                src={stories[currentStoryIndex].image}
                alt={stories[currentStoryIndex].title}
                fill
                className="object-cover"
              />
              
              {/* Story Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    {stories[currentStoryIndex].title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    {stories[currentStoryIndex].description}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="flex gap-1">
                  {stories.map((_, index) => (
                    <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-white transition-all duration-300 ${
                          index === currentStoryIndex ? 'animate-pulse' : ''
                        }`}
                        style={{
                          width: index < currentStoryIndex ? '100%' : 
                                 index === currentStoryIndex ? '100%' : '0%'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseStories}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white text-xl sm:text-2xl hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                ✕
              </button>

              {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
              <button
                onClick={handlePrevStory}
                className="hidden sm:block absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                ‹
              </button>
              <button
                onClick={handleNextStory}
                className="hidden sm:block absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                ›
              </button>

              {/* Mobile Touch Areas for Navigation */}
              <div className="sm:hidden absolute inset-0 flex">
                <div 
                  className="w-1/3 h-full cursor-pointer" 
                  onClick={handlePrevStory}
                />
                <div className="w-1/3 h-full" />
                <div 
                  className="w-1/3 h-full cursor-pointer" 
                  onClick={handleNextStory}
                />
              </div>

              {/* Story Counter */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-white/70 text-xs sm:text-sm font-medium">
                {currentStoryIndex + 1} / {stories.length}
              </div>
            </div>
          </div>
        </div>
      </>
    )}

    <WelcomeNotification 
      isVisible={showNotification} 
      onClose={handleCloseNotification} 
    />
  </div>
  );
};
