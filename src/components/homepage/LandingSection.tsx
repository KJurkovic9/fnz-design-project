'use client';

import PageCard from '@/components/ui/PageCard';
import Title from '@/components/homepage/Title';
import DownArrow from './DownArrow';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LandingSection = () => {
  const subTitleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const subTitle = subTitleRef.current;
    const video = videoRef.current;

    if (!subTitle || !video) return;

    gsap.fromTo(
      subTitle,
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
      video,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2,
      }
    );

    video.play();

    ScrollTrigger.create({
      trigger: video,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => video.play(),
      onLeave: () => video.pause(),
      onEnterBack: () => video.play(),
      onLeaveBack: () => video.pause(),
    });

    const handleClick = () => {
      if (video.muted) {
        video.muted = false;
      } else {
        video.muted = true;
      }
    };
    video.addEventListener('click', handleClick);

    return () => {
      video.removeEventListener('click', handleClick);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)]">
      <PageCard isAnimate={false}>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between space-y-20 sm:space-y-14 lg:space-y-0 lg:space-x-28">
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
          <div className="w-full h-[340px]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
              muted
              playsInline
              loop
            >
              <source src="/assets/videos/fnz-landing-video.mp4" />
            </video>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 w-10 h-14">
          <DownArrow />
        </div>
      </PageCard>
    </section>
  );
};

export default LandingSection;
