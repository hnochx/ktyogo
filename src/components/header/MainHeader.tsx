import { kt_logo } from '@/assets/images/images';
import Image from 'next/image';
import HeaderLink from './HeaderLink';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <>
      <header className="py-3 pl-5 bg-white w-[100vw]">
        <h1 className="font-bold">
          <Link href="/" className="py-2 inline-flex items-center">
            <Image alt="kt" src={kt_logo.src} width={29} height={23} className="inline-block" />
            <span className="pl-[2px] ml-1">Shop</span>
          </Link>
        </h1>
      </header>
      <HeaderLink />
    </>
  );
};
export default MainHeader;
