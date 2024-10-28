'use client';
import { usePathname } from 'next/navigation';
import HeaderLinkBtn from './HeaderLinkBtn';
import { useEffect, useRef } from 'react';

const HeaderLink = ({ isOpen = false }) => {
  const router = usePathname();
  const containerRef = useRef<HTMLDivElement>(null); // 스크롤되는 컨테이너
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]); // 각 링크의 ref 배열

  useEffect(() => {
    const activeLinkIndex = ['/', '/yogoBenefit', '/yogoBrandstory', '/directChangeRate'].indexOf(router);

    if (activeLinkIndex !== -1 && linkRefs.current[activeLinkIndex]) {
      linkRefs.current[activeLinkIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [router]);

  return (
    <div
      ref={containerRef}
      className={`border-b border-t px-[20px] py-[6px] border-[#E9E9E9] bg-white flex gap-x-[6px] gap-y-[10px] overflow-x-auto ${isOpen ? 'flex-wrap' : ''}`}
    >
      {/* 헤더 링크 버튼 */}
      {[
        { link: '/', text: '요고 다이렉트' },
        { link: '/yogoBenefit', text: '요고 가입 혜택' },
        { link: '/yogoBrandstory', text: '요고 브랜드 스토리' },
        { link: '/directChangeRate', text: '핸드폰 등록 및 요금제 변경' },
        { link: '/directChangeRate/recommendation', text: '나만의 요금제 찾기' },
      ].map((item, index) => (
        <HeaderLinkBtn
          key={item.link}
          ref={(el) => {
            linkRefs.current[index] = el;
          }}
          link={item.link}
          text={item.text}
          on={router === item.link}
        />
      ))}
    </div>
  );
};

export default HeaderLink;
