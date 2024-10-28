import { kt_logo } from '@/assets/images/images';
import Image from 'next/image';
import HeaderLink from './HeaderLink';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <>
      <header className="h-[65px] pt-5 pl-5 bg-white w-[100vw]">
        <h1 className="font-bold">
          <Link href="/">
            <Image alt="kt" src={kt_logo.src} width={29} height={23} className="inline-block" />
          </Link>
          <span className="pl-[2px]">Shop</span>
        </h1>
      </header>
      <HeaderLink />
    </>
  );
};
export default MainHeader;
