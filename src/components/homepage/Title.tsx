'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Title = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2,
      }
    );
  }, []);

  return (
    <h1
      ref={titleRef}
      className="text-[56px] leading-14 xs:text-7xl xs:leading-18 sm:text-8xl sm:leading-20 xl:text-9xl xl:leading-28 font-semibold tracking-tight"
    >
      <span className="text-secondary drop-shadow-[2px_3px_7px_#fe00be]">
        F
      </span>
      ESTIVAL
      <br />
      <span className="text-secondary drop-shadow-[2px_3px_7px_#fe00be]">
        N
      </span>
      OVOG
      <br />
      <span className="text-secondary drop-shadow-[2px_3px_7px_#fe00be]">
        Z
      </span>
      VUKA
    </h1>
  );
};

export default Title;
