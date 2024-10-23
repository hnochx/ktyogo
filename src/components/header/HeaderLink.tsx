'use client';
import { usePathname } from 'next/navigation';
import HeaderLinkBtn from './HeaderLinkBtn';

const HeaderLink = ({ isOpen = false }) => {
  const router = usePathname();

  return (
    <div
      className={`border-b border-t px-[20px] py-[6px] border-[#E9E9E9] bg-white flex gap-x-[6px] gap-y-[10px] overflow-x-auto ${isOpen ? 'flex-wrap' : ''}`}
    >
      <HeaderLinkBtn link="/" text="요고 다이렉트" on={router === '/'} />
      <HeaderLinkBtn link="/yogo-benefit" text="요고 가입 혜택" on={router === '/yogo-benefit'} />
      <HeaderLinkBtn link="/yogo-brandstory" text="요고 브랜드 스토리" on={router === '/yogo-brandstory'} />
      <HeaderLinkBtn link="/directChangeRate" text="핸드폰 등록 및 요금제 변경" on={router === '/directChangeRate'} />
    </div>
  );
};
export default HeaderLink;
