'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function DownArrow() {
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tween = gsap.to(arrowRef.current, {
      y: 10,
      duration: 0.8,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top+=10 top',
      once: true,
      onEnter: () => {
        tween.kill();
        gsap.to(arrowRef.current, {
          opacity: 0,
          duration: 0.5,
          pointerEvents: 'none',
        });
      },
    });
  });

  return (
    <div ref={arrowRef} className="text-4xl text-white">
      ↓
    </div>
  );
}
