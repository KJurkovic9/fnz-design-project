import PageCard from '../ui/PageCard';
import Title from '../ui/Title';
import MusicCard from './MusicCard';

const FeaturedMusicSection = () => {
  return (
    <section className="w-full lg:h-[calc(100vh-3rem)]">
      <PageCard isAnimate={true}>
        <div className="w-full h-full flex flex-col space-y-8 lg:space-y-16">
          <Title>ISTAKNUTA GLAZBA</Title>
          <div className="w-full h-full flex flex-col lg:flex-row justify-between space-y-10 lg:space-x-10 xl:space-x-32">
            <MusicCard delay={0.2}></MusicCard>
            <MusicCard delay={0.4}></MusicCard>
            <MusicCard delay={0.6}></MusicCard>
          </div>
        </div>
      </PageCard>
    </section>
  );
};

export default FeaturedMusicSection;
