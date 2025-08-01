'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png';
import prince from '@/assets/images/prince.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  { title: 'JavaScript', iconType: JavaScriptIcon },
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'Chrome', iconType: ChromeIcon },
  { title: 'Github', iconType: GithubIcon },
];

const hobbies = [
  { title: 'Basketball', emoji: '⛹️‍♂️', left: '5%', top: '5%' },
  { title: 'Latin American Musics', emoji: '🎼', left: '45%', top: '15%' },
  { title: 'Gaming', emoji: '🎮', left: '35%', top: '40%' },
  { title: 'Movies', emoji: '🎬', left: '60%', top: '60%' },
  { title: 'Karate', emoji: '🥋', left: '5%', top: '65%' },
  { title: 'Fitness', emoji: '🏋️‍♀️', left: '2%', top: '35%' },
];

export const AboutSection = () => {
  const constraitsRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse into my World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore  the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore  the technologies and tools I use to  craft exceptional digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className=" "
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] p-0 flex flex-col col-span-3">
              <CardHeader
                title="Beyond the Code"
                description="Explore  my interest and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1 overflow-hidden" ref={constraitsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-700 to-sky-900 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraitsRef}
                  >
                    <span className="font-medium">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-2">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-pulse"></div>
                <Image
                  src={prince}
                  alt="smiling prince"
                  className="w-20 h-20 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
