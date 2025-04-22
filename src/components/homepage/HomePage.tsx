'use client';

import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import LandingSection from '@/components/homepage/LandingSection';
import AboutUsSection from '@/components/homepage/AboutUsSection';
import OurProgramSection from '@/components/homepage/OurProgramSection';
import FeaturedMusicSection from '@/components/homepage/FeaturedMusicSection';
import LastSection from '@/components/homepage/LastSection';

const HomePage = () => {
  useEffect(() => {
    (async () => {
      new LocomotiveScroll({
        lenisOptions: { lerp: 1, duration: 2.5, wheelMultiplier: 0.8 },
      });
    })();
  }, []);

  return (
    <div className="w-full h-full space-y-24">
      <LandingSection />
      <AboutUsSection />
      <OurProgramSection />
      <FeaturedMusicSection />
      <LastSection />
    </div>
  );
};

export default HomePage;
