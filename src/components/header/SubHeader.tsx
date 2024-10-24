'use client';
import { header_arrow } from '@/assets/images/images';
import HeaderLink from './HeaderLink';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SubHeader = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false); // 하위 링크 토글
  const [headerTitle, setHeaderTitle] = useState('요고 다이렉트'); // 헤더 제목

  useEffect(() => {
    // 현재 경로에 해당하는 항목 찾기
    const current = [
      { link: '/', text: '요고 다이렉트' },
      { link: '/yogoBenefit', text: '요고 가입 혜택' },
      { link: '/yogoBrandstory', text: '요고 브랜드 스토리' },
      { link: '/directChangeRate', text: '핸드폰 등록 및 요금제 변경' },
    ].find((el) => el.link === router);

    // 타이틀 설정
    if (current) {
      setHeaderTitle(current.text);
    }
  }, [router]);

  return (
    <>
      <div className="h-[52px] leading-[52px] pl-[46px] bg-white w-[100vw]">
        <h1 className="text-[17px] font-bold">
          <button onClick={() => setIsOpen(!isOpen)}>{headerTitle}</button>
          <i
            className={`w-[13px] h-[13px] inline-block ${isOpen && 'rotate-180'}`}
            style={{ backgroundImage: `url(${header_arrow.src})`, backgroundSize: '13px 13px' }}
          ></i>
        </h1>
      </div>
      {isOpen && <HeaderLink isOpen={isOpen} />}
    </>
  );
};
export default SubHeader;
