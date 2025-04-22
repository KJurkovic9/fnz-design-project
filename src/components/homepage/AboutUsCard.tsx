'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

interface Props {
  title: string;
  description: string;
  delay: number;
}

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutUsCard = ({ title, description, delay }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!divRef.current) return;

    gsap.fromTo(
      divRef.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: divRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: delay,
      }
    );
  }, []);

  return (
    <div ref={divRef} className="flex flex-col lg:space-y-5 xl:pr-28">
      <h3 className="text-[15px] sm:text-xl font-bold tracking-wide">
        {title}
      </h3>
      <ul className="list-disc pl-5">
        <li className="text-sm xs:text-[17px] tracking-[0.035rem] leading-6 font-light font-geist">
          {description}
        </li>
      </ul>
    </div>
  );
};

export default AboutUsCard;
