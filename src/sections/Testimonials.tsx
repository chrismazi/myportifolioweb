import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";
import { Fragment } from "react";


const testimonials = [
  {
    name: "Thomas Sankara",
    position: "Product & Technology Development Specialist @National Industial Research and Development Agency Rwanda",
    text: "At NIRDA’s hackathon, Chris showed exceptional creativity and focus. His ideas were practical and impactful, leading his team to victory.He combines innovation with hard work, Chris is someone to watch in tech!",
    avatar: memojiAvatar5,
  },
  
  {
    name: "Venant Uzayisenga",
    position: "Facilitator  @RP-ICT Innovation center",
    text: "Having worked closely with Chris at the ICT Innovation Center, I can confidently say he is a skilled programmer and a natural collaborator. his ability to think critically and innovate sets him apart.",
    avatar: memojiAvatar3,
  },

  {
    name: "Tigist Sheferlaw",
    position: "Software engineer @A2SV Backed by Google",
    text: "I was Chris’s mentor during the Africa to Silicon Valley Hackathon. I was really impressed by his leadership and how well he worked with his team. He has strong technical skills and explains complex ideas in a way that’s easy to understand. Chris is a standout team leader, and I believe he has a bright future ahead",
    avatar: memojiAvatar4,
  },
  {
    name: "Dr Rongin Uwiitije ",
    position: "Lecture @ University of Rwanda",
    text: "Chris is a hardworking and focused student. He is really good at understanding the math and statistics behind how large language models work. His dissertation on ‘Mathematical and Statistical Foundations of Large Language Models in Textual Data Analysis’ shows how he can take complex ideas and make them useful. I’m sure Chris’s work will be important in the field of AI",
    avatar: memojiAvatar5,
  },

  {
    name: "Fakunle John",
    position: "Agricultural Economist ",
    text: "Chris’s dedication to solving problems in agriculture and his deep understanding of mathematical frameworks make him an invaluable asset in any project. his commitment to continuous learning is inspiring",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Seniors"
          title="What Seniors Say About Me"
          description="Don&apos;t just take my word for it. See what my seniors have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none animate-move-left">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
