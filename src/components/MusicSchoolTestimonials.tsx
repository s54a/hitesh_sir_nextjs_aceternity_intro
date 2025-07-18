"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import GridBackground from "./GridBackground";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

const MusicSchoolTestimonials = () => {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden">
      <GridBackground>
        <div className="flex flex-col">
          <h2 className="z-10 mb-8 text-center text-3xl font-bold">
            Hear Our Harmony: Voices of Success
          </h2>
          <div className="flex w-full justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
              <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </div>
      </GridBackground>
    </div>
  );
};

export default MusicSchoolTestimonials;
