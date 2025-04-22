import PageCard from '@/components/ui/PageCard';
import AboutUsCard from './AboutUsCard';
import Title from '../ui/Title';

const AboutUsSection = () => {
  return (
    <section className="w-full sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)]">
      <PageCard isAnimate={true}>
        <div className="w-full h-full flex flex-col space-y-8 sm:space-y-10 lg:space-y-16">
          <Title>O NAMA</Title>
          <div className="w-full h-full space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 lg:gap-20">
            <AboutUsCard
              title='1. Što je "Festival Novog Zvuka"?'
              description="Festival novog zvuka okuplja mlade skladatelje i pruža im priliku da 
                  predstave svoju novu i eksperimentalnu glazbu publici."
              delay={0.2}
            />

            <AboutUsCard
              title="2. Koja je naša misija i vizija?"
              description="Naš cilj je oživjeti kulturnu scenu Hrvatske kroz glazbu i umjetnost. 
                  Želimo da ovaj događaj postane glavno mjesto za mlade talente i eksperimentalne projekte u regiji."
              delay={0.3}
            />

            <AboutUsCard
              title="3. Kako je sve počelo?"
              description="Počeli smo 2021. kako bi otvorili prostor za nove ideje 
                  u klasičnoj glazbi. Danas smo prepoznatljivi po tome što svake godine 
                  okupljamo mlade umjetnike i ljubitelje suvremenih zvukova."
              delay={0.2}
            />

            <AboutUsCard
              title="4. Zašto “Novi zvuk”?"
              description='Ime "Novi zvuk" odražava našu želju za istraživanjem novih načina 
                  izražavanja i pomicanje granica u glazbi. Vjerujemo da suvremena glazba ima moć da pokrene, 
                  inspirira i poveže ljude.'
              delay={0.3}
            />
          </div>
        </div>
      </PageCard>
    </section>
  );
};

export default AboutUsSection;
