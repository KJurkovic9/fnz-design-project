import PageCard from '../ui/PageCard';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa6';
import ContactButton from './ContactButton';

const LastSection = () => {
  return (
    <section className="w-full h-full lg:h-[calc(100vh-3rem)]">
      <PageCard isAnimate={true}>
        <div className="w-full h-full flex flex-col space-y-5 lg:space-y-10">
          <h1 className="w-full text-6xl leading-16 lg:text-8xl xl:text-[7rem] sm:leading-[7.5rem] font-semibold tracking-tight">
            Glazba koja se usudi biti nova, živi kroz one koji joj daju priliku.
          </h1>
          <div className="w-full h-full flex justify-end">
            <ContactButton />
          </div>
          <div className="w-full h-full flex items-end justify-between">
            <div className="w-[600px] h-10 bg-gray-700">slike s upsus.hr</div>
            <div className="h-10 flex items-center space-x-5">
              <FaFacebook className="text-3xl" />
              <FaInstagram className="text-[2rem]" />
              <FaEnvelope className="text-[2rem]" />
            </div>
          </div>
        </div>
      </PageCard>
    </section>
  );
};

export default LastSection;
