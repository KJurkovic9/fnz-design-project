'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

interface Props {
  delay: number;
}

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MusicCard = ({ delay }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!divRef.current) return;

    gsap.fromTo(
      divRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: divRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: delay,
      }
    );
  }, []);

  return (
    <div
      ref={divRef}
      className="w-full h-[22rem] xs:h-96 lg:h-full rounded-2xl lg:rounded-3xl bg-gray-700"
    >
      dovršiti, staviti video/sliku s muzikom
    </div>
  );
};

export default MusicCard;
