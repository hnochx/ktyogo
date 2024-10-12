import { kt_logo } from '@/assets/images/images';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="h-[65px] pt-5 pl-5">
      <h1 className='font-bold'>
        <Image alt="kt" src={kt_logo.src} width={29} height={23} className='inline-block'/> <span className='pl-[2px]'>Shop</span>
      </h1>
    </header>
  );
};
export default Header;
