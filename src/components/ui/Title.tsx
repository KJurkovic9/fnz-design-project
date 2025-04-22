'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Title = ({ children }: Props) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <h1
      ref={titleRef}
      className="w-full text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] xl:leading-24 font-semibold tracking-tight"
    >
      {children}
    </h1>
  );
};

export default Title;
