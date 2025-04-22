'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Props {
  children: React.ReactNode;
  isAnimate: boolean;
}

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PageCard = ({ children, isAnimate }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !isAnimate) return;

    gsap.fromTo(
      sectionRef.current,
      { scale: 0.75 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '0% 100%',
          end: '20% 40%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-full rounded-3xl bg-black flex justify-center items-center py-4 px-4 sm:py-10 sm:px-10 xl:py-14 xl:px-20"
    >
      {children}
    </div>
  );
};

export default PageCard;
