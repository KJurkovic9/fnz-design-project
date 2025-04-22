'use client';

import PageCard from '@/components/ui/PageCard';
import Title from '@/components/homepage/Title';
import DownArrow from './DownArrow';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const LandingSection = () => {
  const subTitleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      subTitleRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.6,
      }
    );

    gsap.fromTo(
      videoRef.current,
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
    <section className="w-full h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)]">
      <PageCard isAnimate={false}>
        <div className="w-full h-full flex flex-col lg:flex-row xl:justify-between space-y-5 sm:space-y-14 lg:space-y-0 lg:space-x-5">
          <div className="w-full lg:h-[400px] flex flex-col space-y-2 xs:space-y-4">
            <Title />
            <h4
              ref={subTitleRef}
              className="w-full text-sm sm:text-base lg:text-lg lg:leading-7 font-light"
            >
              U Sinju zajedno istražujemo granice suvremene glazbe, inovacije i
              umjetnosti u jedinstvenom okruženju.
            </h4>
          </div>
          <div ref={videoRef} className="w-full h-[400px] bg-amber-600"></div>
        </div>
        <div className="absolute bottom-0 left-1/2 w-10 h-14">
          <DownArrow />
        </div>
      </PageCard>
    </section>
  );
};

export default LandingSection;
