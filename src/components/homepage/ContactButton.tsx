'use client';

import { useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import gsap from 'gsap';
import Link from 'next/link';

const ContactButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      scale: 1.04,
      duration: 0.3,
      ease: 'power1.out',
    });

    gsap.to(buttonRef.current.querySelector('svg'), {
      x: 10,
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: '#000',
      duration: 0.3,
      ease: 'power1.out',
    });

    gsap.to(buttonRef.current.querySelector('svg'), {
      x: 0,
      duration: 0.3,
      ease: 'power1.out',
    });
  };

  return (
    <Link
      href="/contact"
      ref={buttonRef}
      className="w-64 h-16 px-5 flex items-center justify-between text-xl border rounded-xl group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Kontaktirajte nas!
      <BsArrowRight className="text-2xl transition-all duration-300" />
    </Link>
  );
};

export default ContactButton;
