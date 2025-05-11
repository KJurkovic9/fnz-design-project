import { BsArrowRight } from 'react-icons/bs';
import Title from '../ui/Title';

const ContactForm = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-10 font-geist">
      <Title>Pošaljite nam poruku</Title>
      <div className="w-full h-full flex space-x-7">
        <div className="w-full h-full flex flex-col space-y-7">
          <label className="flex flex-col text-lg tracking-wide">
            Unesite naslov
            <input
              type="text"
              className="mt-2 w-full h-14 px-3 bg-neutral-900 border border-neutral-900 rounded-lg transition-all duration-300 focus:outline-none focus:bg-transparent focus:ring-1 focus:ring-neutral-900"
            />
          </label>
          <label className="flex flex-col text-lg tracking-wide">
            Unesite e-mail
            <input
              type="text"
              className="mt-2 w-full h-14 px-3 bg-neutral-900 border border-neutral-900 rounded-lg transition-all duration-300 focus:outline-none focus:bg-transparent focus:ring-1 focus:ring-neutral-900"
            />
          </label>
          <label className="flex flex-col text-lg tracking-wide">
            Unesite poruku
            <textarea className="mt-2 w-full h-44 px-3 bg-neutral-900 border border-neutral-900 rounded-lg transition-all duration-300 focus:outline-none focus:bg-transparent focus:ring-1 focus:ring-neutral-900"></textarea>
          </label>
        </div>
        <div className="w-full h-full flex items-end">
          <button className="w-56 h-16 px-5 flex items-center justify-between text-lg bg-neutral-900 border border-neutral-900 rounded-lg transition-all duration-300 hover:bg-transparent">
            Pošalji
            <BsArrowRight className="text-2xl transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
