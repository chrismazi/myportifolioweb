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


export const HeroSection = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification after 3 seconds to let the page load and user settle
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseNotification = () => {
    setShowNotification(false);
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
      <Image
       src={prince} 
       className= " rounded-full size-[100px]" 
       alt="person peeking from behind laptop" 
       />
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
    <WelcomeNotification 
      isVisible={showNotification} 
      onClose={handleCloseNotification} 
    />
  </div>
  );
};
