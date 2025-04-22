import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <nav className="w-full h-[4.5rem] px-2 md:px-5 xl:px-20 font-geist">
      <div className="w-full h-full flex justify-between items-center">
        <Link href="/" className="text-xl font-medium flex items-center group">
          <Image
            src="/assets/images/fnz_logo2.svg"
            alt="FNZ logo"
            width={35}
            height={35}
            className="mr-1 opacity-70 transition-all duration-300 group-hover:opacity-100"
          />
          <span>FNZ</span>
        </Link>
        <div className="h-full flex items-center">
          <RxHamburgerMenu className="flex text-2xl cursor-pointer lg:hidden" />
          <div className="hidden lg:flex h-full items-center space-x-7 text-neutral-200">
            <Link
              href="#aboutus"
              className="text-sm relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              O NAMA
            </Link>

            <Link
              href="/koncerti"
              className="text-sm relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              KONCERTI
            </Link>

            <Link
              href="/radionice"
              className="text-sm relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              RADIONICE
            </Link>

            <Link
              href="/kontakt"
              className="text-sm relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              KONTAKT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
