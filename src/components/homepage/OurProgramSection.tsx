import PageCard from '@/components/ui/PageCard';
import Carousel from './Carousel';
import Title from '../ui/Title';

const OurProgramSection = () => {
  return (
    <section className="w-full h-full md:h-[calc(100vh-3rem)]">
      <PageCard isAnimate={true}>
        <div className="w-full h-full flex flex-col space-y-8 md:space-y-16">
          <Title>NAŠ PROGRAM - 2025</Title>

          <div className="h-80 min-h-80">
            <Carousel />
          </div>
        </div>
      </PageCard>
    </section>
  );
};

export default OurProgramSection;
